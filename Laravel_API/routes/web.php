<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\EventController;

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

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});
Route::get('/activities', 'App\Http\Controllers\ActivityController@index');
// Route::get('/activities', function () {
//     return ['Laravel' => app()->version()];
// });
require __DIR__.'/auth.php';
Route::get('/eventdata',[EventController::class,'index']);