<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\View;

class ShareAppUrl
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        View::share('app_url', config('app.url'));
        return $next($request);
    }
}
