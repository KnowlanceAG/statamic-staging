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

                File::move($web, $oldWeb);
                File::move($static, $web);
                File::delete($oldWeb);
                Log::debug('SSG finished.');
            });
        }
    }
}
