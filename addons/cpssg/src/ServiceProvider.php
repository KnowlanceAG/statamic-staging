<?php

namespace Uscreen\Cpssg;

use Statamic\Providers\AddonServiceProvider;
use Illuminate\Support\Facades\Log;

class ServiceProvider extends AddonServiceProvider
{
    public function register() {
        Log:debug('hello world');
    }
}
