<?php

use App\Http\Controllers\BookMarksController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use App\Models\BookMarks;
use App\Models\Comment;
use App\Models\Profile;
use Illuminate\Database\Connectors\PostgresConnector;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    $user =$request->user();
    $user->load('profile'); 
    return $user;
})->middleware('auth:sanctum');



Route::post('/register',[RegisterController::class,'register']);
Route::post('/login',[LoginController::class,'Login']);

Route::apiResource('/posts',PostController::class);
Route::apiResource('/profiles',ProfileController::class);

Route::apiResource('/comments',CommentController::class);

Route::apiResource('/users',UserController::class);
Route::apiResource('/bookmarks',BookMarksController::class);
Route::get('/getBooksMarks',[BookMarksController::class,'getBookMarks']);