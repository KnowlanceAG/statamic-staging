<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', '/!/DynamicToken/*', '/!/aidetect'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'gwriters-statamic-stage.uscreen.net',
        'gwriters-ssg-stage.uscreen.net',
        'ssg-gwriters.uscreen.me',
        'statamic-dynamic.gwriters.de',
        'gwriters.de',
        'gwriters.ch'
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
