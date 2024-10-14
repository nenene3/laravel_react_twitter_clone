<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookMarks extends Model
{
    use HasFactory;
    protected $fillable=[
        "user_id",
        "post_id"
    ];

    public function Users(){
        return $this->belongsToMany(User::class,'book_marks');
    } 
    public function posts(){
        return $this->belongsToMany(Post::class,'book_marks');
    }
}
