<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Support\Facades\Gate;


use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
        $fields = $request->validate([
            'name' => 'required|max:255',
            'banner'=>'nullable|image',
            'profile_pic'=>'nullable|image',
        ]);
        Gate::authorize('modify', $profile);

        $profile->update($fields);

        return ['post' => $profile, 'user' => $profile->user];
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
