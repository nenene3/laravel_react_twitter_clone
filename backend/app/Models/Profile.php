<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    /** @use HasFactory<\Database\Factories\ProfileFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'banner',
    ];


    public function user(){
        return $this->belongsTo(User::class);
    }
    public function posts(){
        return $this->belongsToMany(Post::class,);
    }
}
