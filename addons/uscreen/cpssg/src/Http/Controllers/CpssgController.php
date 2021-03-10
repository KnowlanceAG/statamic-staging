<?php

namespace Uscreen\Cpssg\Http\Controllers;
use Illuminate\Support\Facades\Log;
use Statamic\Console\Processes\Process;
use Illuminate\Http\Request;

class CpssgController
{
  private $process;

  public function __construct()
  {
    $this->process = new Process();
  }

  public function index()
  {
    return view('cpssg::index');
  }

  public function generate(Request $request)
  {
    return $this->process->run('php please ssg:generate --ansi', $request->cacheKey);
  }

  public function check(Request $request)
  {
    return $this->process->colorized()->cachedOutput($request->cacheKey);
  }
}
