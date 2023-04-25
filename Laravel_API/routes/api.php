<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizeActivityController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\MessageController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/OrganizeActivity',[OrganizeActivityController::class,'index']);

Route::put('/members/update', [MemberController::class,'update']);

Route::get('/activities', [ActivityController::class,'index']);

Route::get('/notify', [OrganizeActivityController::class,'notify']);

Route::post('/messages',[MessageController::class,'store']);
Route::get('/messages',[MessageController::class,'index']);
