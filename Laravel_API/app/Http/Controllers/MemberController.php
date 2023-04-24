<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MemberController extends Controller
{
    public function update(Request $request)
    {
        $user = Auth::user();
        $user->member_avatar = $request->input("member_avatar");
        $user->name = $request->input("name");
        $user->member_phone = $request->input("member_phone");
        $user->email = $request->input("email");
        $user->member_county = $request->input("member_county");
        $user->member_birth = $request->input("member_birth");
        $user->member_sex = $request->input("member_sex");
        $user->member_introduction = $request->input("member_introduction");
        $user->save();

        return response()->json(["message" => "會員資料已更新"]);
    }
}