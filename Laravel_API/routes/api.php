<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizeActivityController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\JoinActivityController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\favoriteAvtivitiesController;
use App\Models\OrganizeActivity;

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

Route::get('/organizeActivities', [JoinActivityController::class,'organizeActivities']);

Route::post('/createActivity' , [OrganizeActivityController::class,'createActivity']);

Route::get('/joinActivities', [JoinActivityController::class,'joinActivities']);

Route::get('/joinActivities1', [JoinActivityController::class,'store']);

Route::get('/joinActivities/{activityId}', [JoinActivityController::class,'joinActivities2']);

Route::post('/joinActivities/update/{activityId}/{memberId}', [JoinActivityController::class,'update']);

Route::post('/joinActivities1', [JoinActivityController::class,'store']);

Route::delete('/joinActivities/{activityId}/{memberId}', [JoinActivityController::class, 'deletejoinActivities']);

Route::get('/favoriteActivities', [JoinActivityController::class,'favoriteActivities']);

Route::delete('/favoriteActivities/{activityId}/{memberId}', [JoinActivityController::class, 'deletefavoriteActivities']);

Route::get('/activities/{activity_id}', [ActivityController::class,'index']);

Route::get('/activities/{activity_id}/timediff', [ActivityController::class,'timediff']);

Route::get('/joinActivities/{activity_id}', [JoinActivityController::class,'reviewActivities']);

Route::get('/notify', [OrganizeActivityController::class,'notify']);

Route::get('/notify2', [OrganizeActivityController::class,'notify2']);

Route::post('/messages',[MessageController::class,'store']);

Route::delete('/messages/{id}',[MessageController::class,'deleteMessage']);

Route::get('/messages',[MessageController::class,'index']);

Route::get('/fetchOrganizeAndJoinData',[ActivityController::class,'fetchOrganizeAndJoinData']);

Route::get('/like',[favoriteAvtivitiesController::class,'index']);

Route::post('/like',[favoriteAvtivitiesController::class,'addToFavorites']);

