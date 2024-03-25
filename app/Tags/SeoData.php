<?php

namespace App\Tags;

use Statamic\Tags\Tags;
use Illuminate\Support\Facades\Log;
use WithCandour\AardvarkSeo\Facades\PageDataParser;

class SeoData extends Tags
{
  /**
   * The {{ seo_data }} tag.
   *
   * @return string|array
   */
  public function index()
  {
    $seodata = PageDataParser::getData(collect($this->context));
    $data = [
      'calculated_title' => $seodata['calculated_title'],
      'use_meta_keywords' => $seodata['use_meta_keywords'] ?? '',
      'meta_keywords' => $seodata['meta_keywords']  ?? '',
      'meta_description' => $seodata['meta_description'] ?? '',
      'localized_urls' => $seodata['localized_urls'] ?? [],
      'aardvark_general_settings' => $seodata['aardvark_general_settings'],
      'canonical_url' => $seodata['canonical_url'] ?? '',
      'calculated_og_image' => $seodata['calculated_og_image'],
      'og_title' => $seodata['og_title'] ?? '',
      'og_description' => $seodata['og_description'] ?? '',
    ];

    return $data;
  }
}
