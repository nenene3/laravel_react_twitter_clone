<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $fillable=[
        "text",
        "user_id"
    ];

    public function profile(){
        return $this->belongsToMany(Profile::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    
    public function comments(){
        return $this->hasMany(Comment::class);
    }
    public function bookmarks(){
        return $this->belongsToMany(User::class,'book_marks')->withTimestamps();
    }
}
