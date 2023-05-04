<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class favoriteAvtivitiesController extends Controller
{
    public function index()
    {
        $allnews = DB::table('favorite_activities')
            ->get();
        $json = $allnews->toJson();
        return $json;
    }

    public function addToFavorites(Request $request)
    {
        $memberId = $request->input('member_id');
        $activityId = $request->input('activity_id');

        $favorite = DB::table('favorite_activities')
            ->where('member_id', $memberId)
            ->where('activity_id', $activityId)
            ->first();

        if ($favorite) {
            return response()->json([
                'message' => '該活動已經收藏過了',
            ], 400);
        }


        DB::table('favorite_activities')->insert([
            'member_id' => $memberId,
            'activity_id' => $activityId,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json([
            'message' => '添加成功',
        ]);
    }
}
