<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Statamic;
use Statamic\StaticSite\Generator;
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
        // Statamic::script('app', 'cp');
        Statamic::style('app', 'cp.css');
        if ($ssg) {
            $ssg->after(function () {
                // restore symlink
                Log::debug('Restoring symlink.');
                $staticDir = base_path() . '/storage/app/static';
                $outLink =  base_path() . '/storage/app/out';
                File::delete($outLink);
                File::link($staticDir, $outLink);
                File::delete(CpssgController::$lockfileName);
                Log::debug('SSG finished.');
            });
        }
    }
}
