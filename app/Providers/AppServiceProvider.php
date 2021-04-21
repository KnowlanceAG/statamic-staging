<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Statamic;
use Statamic\StaticSite\Generator;

use Statamic\Facades\Entry;
use App\UrlPaginator as UrlPaginator;
use Statamic\Extensions\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Log;

class AppServiceProvider extends ServiceProvider
{
    private $ssgConfig;

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
      // Statamic::script('app', 'cp');
      Statamic::style('app', 'cp.css');

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


      if (!isset($this->ssgConfig)) {
        $this->ssgConfig = config('statamic.ssg');
        $this->ssgConfig['base_url'] = config('cpssg.static_site_url');
        $this->ssgConfig['urls'] = array_merge(
            $this->ssgConfig['urls'],
            $this->blogUrls()
        );

        config(['statamic.ssg' => $this->ssgConfig]);
        if ($ssg) {
          $ssg->setConfig(config('statamic.ssg'));
        }
      }

      $this->app->beforeResolving(Generator::class, function ($generator) {
        $config = config('statamic.ssg');
        $config['base_url'] = config('cpssg.static_site_url');
        $config['urls'] = array_merge(
            $config['urls'],
            $this->blogUrls()
        );
        config(['statamic.ssg' => $this->ssgConfig]);
      });
    }
}
