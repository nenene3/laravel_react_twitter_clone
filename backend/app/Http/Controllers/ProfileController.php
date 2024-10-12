<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Support\Facades\Gate;


use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Storage;


class ProfileController extends Controller implements HasMiddleware
{

    public static function  Middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['index', 'show'])
        ];
    }

    public function index() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        return $data;
    }

    /**
     * Display the specified resource.
     */
    public function show(Profile $profile)
    {
        // Load posts with the user and also load the user for the profile
        $posts = $profile->posts()->with('user')->get();

        // Load the user relationship for the profile
        $profile->load('user');

        return [
            "posts" => $posts,
            "profile" => $profile
        ];
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Profile $profile)
    {
        
        Gate::authorize('update', $profile);


        
        $fields = $request->validate([
            'banner' => 'required|file|mimes:jpeg,png,jpg,gif,pdf|max:2048',
            'profile_pic' => 'required|file|mimes:jpeg,png,jpg,gif,pdf|max:2048',
        ]);

        
        if ($request->hasFile('banner')) {
            $path = $request->file('banner')->store('banners', 'public');
            $profile->banner = $path;
            $profile->save();
            
        }

        // Handle profile picture upload
        if ($request->hasFile('profile_pic')) {
            $path = $request->file('profile_pic')->store('profile_pics', 'public');
            $user = $request->user();
            $user->profile_pic = $path;
            $user->save();
          
        }

        // Ensure the profile relationship with the user is loaded
        $profile->load('user');

        // Return the updated profile and the associated user
        // return ['profile' => $profile, 'user' => $profile->user];
        $data= $request->all();
        return $data;
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profile $profile)
    {
        Gate::authorize('modify', $profile);
        $profile->delete();

        return ["message" => 'profile deleted'];
    }
}
