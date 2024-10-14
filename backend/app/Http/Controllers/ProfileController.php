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
        $posts = $profile->posts()->withCount('comments')->with('user')->orderByDesc('created_at')->get();

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
            if($profile->banner){
                Storage::disk('public')->delete($profile->banner);
            }

            $path = $request->file('banner')->store('banners', 'public');
            $profile->banner = $path;
            $profile->save();
            
        }

        // Handle profile picture upload
        if ($request->hasFile('profile_pic')) {
            $user = $request->user();
            
            if ($user->profile_pic) {
                
                Storage::disk('public')->delete($user->profile_pic);
            }
            
            $path = $request->file('profile_pic')->store('profile_pics', 'public');
            $user->profile_pic = $path;
            $user->save();
        }
        

        
        $profile->load('user');

        
        return ['profile' => $profile, 'user' => $profile->user];
        
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
