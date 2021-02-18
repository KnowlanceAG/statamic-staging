<?php

namespace Uscreen\Ssgbutton;

use Statamic\Statamic;
use Illuminate\Support\Facades\Log;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    public function boot() {
        parent::boot();
        Statamic::booted(function () {
            Log::info('Ssgbutton');
        });

    }
}
