<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
// use Illuminate\Support\Facades\Log;

class NotPaginatedPage extends Modifier
{

    protected static $handle = 'not_paginated_page';

    private $pattern = '/\/(presse|blog|author\/[\-a-zA-Z]+)\/page\//';

    /**
     * Check if url is not a pagination page.
     *
     * @param mixed  $value    The url
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return boolean
     */
    public function index($value, $params, $context)
    {
        return preg_match($this->pattern, $value, $matches) == 0;
    }
}
