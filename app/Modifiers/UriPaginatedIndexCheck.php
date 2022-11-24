<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;

class UriPaginatedIndexCheck extends Modifier
{

    protected static $handle = 'uri_paginated_index_check';

    /**
     * Checks if $value in array of paginated index pages
     * Used in breadcrumbs generation
     * @see resources/views/partials/content/breadcrumbs_element.html
     *
     * @param mixed  $value    The value to be checked
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return boolean
     */
    public function index($value, $params, $context)
    {
        return in_array($value, ['/blog', '/presse', '/author']);
    }
}