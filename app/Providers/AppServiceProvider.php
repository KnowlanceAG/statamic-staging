<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Statamic;
use App\UrlPaginator as UrlPaginator;
use Statamic\Extensions\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Log;


class AppServiceProvider extends ServiceProvider
{

  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
  }

  private function bootSsg()
  {
    Log::debug('in bootSsg');
    // replacing app.url with static (public) url while generating ssg pages.
    $config = config('app');
    $config['url'] = config('cpssg.static_site_url');
    config(['app' => $config]);

    $this->app->extend(LengthAwarePaginator::class, function ($paginator) {
      $options = $paginator->getOptions();

      $options['path'] = preg_replace(
        '/\/page\/\d+$/',
        '',
        $options['path']
      );

      $config = [
        'items' => $paginator->getCollection(),
        'total' => $paginator->total(),
        'perPage' => $paginator->perPage(),
        'currentPage' => $paginator->currentPage(),
        'options' => $options,
      ];

      return $this->app->makeWith(UrlPaginator::class, $config);
    });

    UrlPaginator::currentPageResolver(function () {
      return optional($this->app['request']->route())->parameter('page');
    });
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    Statamic::script('app', 'cp.js');
    Statamic::style('app', 'cp.css');

    if ($this->app->runningInConsole()) {
      $this->bootSsg();
    }
  }
}
