<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
use Statamic\Facades\GlobalSet;
use Statamic\Facades\Config;
use Illuminate\Support\Facades\Log;

class Shortcode extends Modifier
{
  protected static $handle = 'shortcode';
  private $replacements = [];

  public function __construct()
  {
    $locale = Config::getFullLocale();
    $contactData = GlobalSet::findByHandle('localized_contact_data')->fileData()['data'];
    $this->replacements['phone'] = $contactData["phone_{$locale}"];
    $this->replacements['email'] = $contactData["mail_address_{$locale}"];
  }

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
    return preg_replace(
      ['/##phone##/', '/##email##/'],
      [$this->replacements['phone'], $this->replacements['email']],
      $value
    );
  }
}
