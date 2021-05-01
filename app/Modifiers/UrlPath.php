<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;

class UrlPath extends Modifier
{

    protected static $handle = 'url_path';

    /**
     * Modify a value.
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
        $path = parse_url($value, PHP_URL_PATH);
        $query = parse_url($value, PHP_URL_QUERY);
        return $query ? $path . '?' . $query : $path;
    }
}
