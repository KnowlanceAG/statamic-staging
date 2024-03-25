<?php

return [

  /*
  |--------------------------------------------------------------------------
  | CORS Allowed Hosts
  |--------------------------------------------------------------------------
  |
  | This option controls which hosts will be allowed to retrieve a fresh token
  | from the dynamic backend.
  | Expecting a comma-separated list of hosts matching the referrer of the
  | requestion resource.
  */
  'allowed_hosts' => explode(',', preg_replace('/\s+/', '', env('CPSSG_ALLOWED_HOSTS', ''))),
  'static_site_urls' => explode(',', preg_replace('/\s+/', '', env('STATIC_SITE_URLS', ''))),
  'static_site_url' => env('STATIC_SITE_URL', 'https://gwriter.uscreen.me/'),
];
