<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;


class PostController extends Controller implements HasMiddleware
{

    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['index', 'show'])
        ];
    }


    public function index()
    {
        $posts = Post::with('user')->get();
        return ["post" => $posts];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      $validateData =  $request->validate([
            "text" => ['required', 'string', 'max:255'],
        ]);
        $post = new Post($validateData);
        $user = $request->user();
        $user->posts()->save($post);
        $profile = $user->profile;
        $profile->posts()->save($post);
        
        return ["message" => 'post created successfully', "post" => $post];
        // return $request->all();
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
