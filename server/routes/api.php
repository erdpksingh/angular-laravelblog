<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ApiuserController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
   
// });

Route::post("login",[ApiuserController::class,'index']);
Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/posts', [PostController::class, 'index']);
    Route::get('/posts/{id}', [PostController::class, 'show']);
    });
