<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Models\Comment;
use App\Models\Profile;
use Illuminate\Database\Connectors\PostgresConnector;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/',function(){
    return 'hihihihihihihi';
});
Route::post('/register',[RegisterController::class,'register']);
Route::post('/login',[LoginController::class,'Login']);

Route::get('/posts',[PostController::class,'index']);

Route::apiResource('/profiles',ProfileController::class);

Route::apiResource('/comments',CommentController::class);