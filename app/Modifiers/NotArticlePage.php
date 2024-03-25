<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
// use Illuminate\Support\Facades\Log;

class NotArticlePage extends Modifier
{

    protected static $handle = 'not_article_page';

    private $pattern = '/\/blog\/[\-a-zA-Z0-9]+[\/]?$/';
    // private $pattern = '/\/(presse|blog)\/[\-a-zA-Z0-9]+[\/]?$/';

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
