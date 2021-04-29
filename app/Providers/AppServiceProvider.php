<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Statamic;
use Uscreen\Cpssg\CpssgGenerator;
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
        $this->app->extend(LengthAwarePaginator::class, function ($paginator) {
            $options = $paginator->getOptions();

            $options['path'] = preg_replace(
                '/\/page\/\d+$/',
                '',
                $options['path']
            );

            Log::debug('options path: ' . $options['path']);
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
        // Statamic::script('app', 'cp');
        Statamic::style('app', 'cp.css');

        if ($this->app->runningInConsole()) {
            $this->bootSsg();
        }
    }
}
