<?php

namespace App\Http\Controllers;

use App\Models\BookMarks;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class BookMarksController extends Controller implements HasMiddleware
{


    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['index', 'show']),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return 'index';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = $request->user();
        $validateData = $request->validate([
            "post_id"=>['required','exists:posts,id'],
        ]);
        // $post = Post::find($request->post_id);
        $user->bookmarks()->attach($request->post_id);

        return ["message"=>"post stored in book marks successfully"];
    }

    /**
     * Display the specified resource.
     */
    public function show(BookMarks $bookMarks)
    {
        //
        return 'show';
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BookMarks $bookMarks)
    {
        //
        return 'update';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BookMarks $bookMarks)
    {
        //
        return 'destroy';
    }
}
