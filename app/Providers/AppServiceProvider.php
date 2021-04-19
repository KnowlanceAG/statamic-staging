<?php

namespace App\Providers;

use App\UrlPaginator as UrlPaginator;
use Statamic\Extensions\Pagination\LengthAwarePaginator;

use Illuminate\Support\ServiceProvider;
use Statamic\Statamic;
use Statamic\StaticSite\Generator;
use Statamic\Facades\Entry;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

use Uscreen\Cpssg\Http\Controllers\CpssgController;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Generator $ssg = null)
    {
        $this->app->extend(LengthAwarePaginator::class, function ($paginator) {
            $options = $paginator->getOptions();
            $options['path'] = preg_replace('/\/page\/\d+$/', '', $options['path']);

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

        $this->app->beforeResolving(Generator::class, function ($generator) {
            $config = config('statamic.ssg');

            $config['urls'] = array_merge(
                $config['urls'],
                $this->blogUrls()
                // $this->articleUrls(),
                // $this->tagUrls(),
            );

            config(['statamic.ssg' => $config]);
        });

        // Statamic::script('app', 'cp');
        Statamic::style('app', 'cp.css');
        if ($ssg) {
            $ssg->after(function () {
                $static = base_path() . '/storage/app/static';
                $web = base_path() . '/storage/app/web';
                $oldWeb = base_path() . '/storage/app/web.old';
                if (File::exists($oldWeb)) {
                    File::deleteDirectory($oldWeb);
                }
                if (File::exists($web)) {
                    File::move($web, $oldWeb);
                }
                if (File::exists($static)) {
                    File::move($static, $web);
                }
                if (File::exists($oldWeb)) {
                    File::deleteDirectory($oldWeb);
                }
                if (File::exists(CpssgController::$lockfileName)) {
                    File::delete(CpssgController::$lockfileName);
                }
                Log::debug('SSG finished!');
            });
        }
    }

    private function blogUrls()
    {
        // The URL of the listing.
        $url = '/blog';

        // The number of entries per page, according to your collection tag.
        $perPage = 10;

        // The total number of entries in the collection.
        // Make sure to mimic whatever params/filters are on the collection tag.
        $total = Entry::query()->where('collection', 'blog')->where('status', 'published')->count();

        return collect(range(1, ceil($total / $perPage)))
            ->map(fn ($page) => $url.'/page/'.$page)
            ->all();
    }
}
