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
                $static = base_path() . '/storage/app/static';
                $web = base_path() . '/storage/app/web';
                $oldWeb = base_path() . '/storage/app/web.old';
                if (File::exists($oldWeb)) {
                    File::delete($oldWeb);
                }
                if (File::exists($web)) {
                    File::move($web, $oldWeb);
                }
                if (File::exists($static)) {
                    File::move($static, $web);
                }
                if (File::exists($oldWeb)) {
                    File::delete($oldWeb);
                }
                if (File::exists(CpssgController::$lockfileName)) {
                    File::delete(CpssgController::$lockfileName);
                }
                Log::debug('SSG finished!');
            });
        }
    }
}
