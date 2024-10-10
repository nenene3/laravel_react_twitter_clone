<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
   public function register(Request $req){
    $validateData= $req->validate([
        "email"=>['required','unique:users','string','email'],
        "password"=>['required','min:8','string'],
        "name"=>['string','required'],
    ]);
   
    $user = User::create($validateData);
    $token = $user->createToken($req->name);
    return ["user"=>$user,"token"=>$token->plainTextToken];
   }
}
