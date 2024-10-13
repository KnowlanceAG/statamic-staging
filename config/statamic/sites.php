<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sites
    |--------------------------------------------------------------------------
    |
    | Each site should have root URL that is either relative or absolute. Sites
    | are typically used for localization (eg. English/French) but may also
    | be used for related content (eg. different franchise locations).
    |
    */

    'sites' => [

        'default' => [
            'name' => config('app.name'),
            'locale' => 'de_DE',
            'url' => '/',
        ],

    ],

    'openai' => [
        'api_key' => env('OPENAI_API_KEY', 'default-api-key'),
        'api_url' => env('OPENAI_API_URL', 'https://api.openai.com/v1/chat/completions'),
    ],
];
