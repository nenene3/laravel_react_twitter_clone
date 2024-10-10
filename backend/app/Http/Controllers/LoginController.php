<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{

    public function Login(Request $req)
    {
        
        $validateData = $req->validate([
            "email" => ['required', 'email', 'string', 'exists:users'],
            "password" => ['required', 'min:8', 'string'],
        ]);
        $user = User::where('email', $validateData['email'])->first();

        if (!$user || !Hash::check($req->password, $user->password)) {
            return [
                "errors" => [
                    "email" => "not defined"
                ]
            ];
        }
       $token = $user->createToken($user->name);

        return [
            "user"=>$user,
            "token"=>$token->plainTextToken
        ];

    }
}
