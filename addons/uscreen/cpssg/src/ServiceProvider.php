<?php

namespace Uscreen\Cpssg;

use Statamic\Statamic;
use Statamic\Providers\AddonServiceProvider;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;
use Statamic\CP\Navigation\Nav;
use Statamic\Facades\CP\Nav as NavAPI;


use Uscreen\Cpssg\Http\Controllers\CpssgController;


class ServiceProvider extends AddonServiceProvider
{
    protected $viewNamespace = 'cpssg';


    protected $scripts = [
        __DIR__.'/../dist/js/cpssg.js',
    ];


    public function boot()
    {
        parent::boot();

        // Log::debug('nav', NavAPI::items());

        Statamic::booted(function () {
          Statamic::pushCpRoutes(function () {
            Route::name('cpssg.')->prefix('cpssg')->group(function () {
                Route::get('index', [CpssgController::class, 'index'])->name('index');
                Route::get('generate', [CpssgController::class, 'generate'])->name('generate');
                Route::get('check', [CpssgController::class, 'check'])->name('check');
            });
          });

          NavAPI::extend(function (Nav $nav) {
            $nav->content('Generate')
                ->section('SSG')
                ->route('cpssg.index')
                ->icon('shrink');
          });
        });
    }
}
