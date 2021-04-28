<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Statamic;
use Uscreen\Cpssg\CpssgGenerator;

use Statamic\Facades\Entry;
use Statamic\Facades\User;
use App\UrlPaginator as UrlPaginator;
use Statamic\Extensions\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Log;

class AppServiceProvider extends ServiceProvider
{
    private static function urls($identifier)
    {
        // The URL of the listing.
        $url = "/{$identifier}";

        // The number of entries per page, according to your collection tag.
        $perPage = 10;

        // The total number of entries in the collection.
        // Make sure to mimic whatever params/filters are on the collection tag.
        $total = Entry::query()
            ->where('collection', $identifier)
            ->where('status', 'published')
            ->count();

        return collect(range(1, ceil($total / $perPage)))
            ->map(fn($page) => $url . '/page/' . $page)
            ->all();
    }

    private static function authorUrls()
    {
        $perPage = 10;
        $allUrls = [];
        $users = User::all()->toArray();

        foreach ($users as $user) {
            if ($user->slug) {
                $posts = Entry::query()
                    ->where('collection', 'blog')
                    ->get();

                $filteredPosts = $posts->filter(function ($value, $key) use (
                    $user
                ) {
                    return in_array($user->id(), $value->author);
                });

                $total = $filteredPosts->count();
                if ($total > 0) {
                    $allUrls += ['/author/' . $user->slug];
                    Log::debug(
                        'SSG Author URLs: ' .
                            $user->name .
                            ' has ' .
                            $total .
                            ' posts.'
                    );
                    $urls = collect(range(1, ceil($total / $perPage)))
                        ->map(
                            fn($page) => '/author/' .
                                $user->slug .
                                '/page/' .
                                $page
                        )
                        ->all();

                    $allUrls = array_merge($allUrls, $urls);
                }
            }
        }
        return $allUrls;
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(CpssgGenerator $ssg = null)
    {
        // Statamic::script('app', 'cp');
        Statamic::style('app', 'cp.css');

        $this->app->extend(LengthAwarePaginator::class, function ($paginator) {
            $options = $paginator->getOptions();
            $options['path'] = preg_replace(
                '/\/page\/\d+$/',
                '',
                $options['path']
            );

            return $this->app->makeWith(UrlPaginator::class, [
                'items' => $paginator->getCollection(),
                'total' => $paginator->total(),
                'perPage' => $paginator->perPage(),
                'currentPage' => $paginator->currentPage(),
                'options' => $options,
            ]);
        });

        UrlPaginator::currentPageResolver(function () {
            return optional($this->app['request']->route())->parameter('page');
        });
    }

    public static function ssgConfiguration()
    {
        $config = config('statamic.ssg');
        $config['base_url'] = config('cpssg.static_site_url');

        $config['urls'] = array_merge(
            $config['urls'],
            self::urls('blog'),
            self::urls('presse'),
            self::authorUrls()
        );
        config(['statamic.ssg' => $config]);
        return $config;
    }
}
