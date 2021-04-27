<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::statamic('blog/page/{page}', 'with-side-bar', ['load' => '3fab1586-951b-40e6-904d-e8b3ede6b6e4']);
Route::statamic('presse/page/{page}', 'without-teaser-with-side-bar', ['load' => '8bdfe06a-1a06-46e1-94d2-591c8f5faece']);


