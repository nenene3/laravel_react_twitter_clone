<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Profile;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->has(Profile::factory())
            ->create(["email" => "test@test.com", "password" => "12341234", "name" => "test"])
            ->each(function ($user) {
                echo ($user->email);
                print("\n");
                $posts=Post::factory()
                    ->count(6)
                    ->for($user)
                    ->has(Comment::factory()->count(7)->for($user))
                    ->create();

                $user->profile->posts()->saveMany($posts);
                });


        User::factory()->count(3)->has(Profile::factory())
            ->create()
            ->each(function ($user) {
                echo ($user->email);
                print("\n");
               $posts= Post::factory()
                    ->count(2)
                    ->for($user)
                    ->has(Comment::factory()->count(7)->for($user))
                    ->create();
                $user->profile->posts()->saveMany($posts);
            });
    }
}
