<?php

namespace App\Http\Controllers;

use App\Models\favoriteActivities;
use App\Models\joinActivities;
use App\Models\OrganizeActivity;
use Illuminate\Http\Request;

class JoinActivityController extends Controller
{
    public function organizeActivities()
    {
        $activities = OrganizeActivity::join('users', 'users.id', '=', 'organize_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'organize_activities.activity_id')
            ->select('activities.*', 'users.*')
            ->get();

        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function joinActivities()
    {
        $activities = joinActivities::join('users', 'users.id', '=', 'join_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'join_activities.activity_id')
            ->select('activities.*', 'users.*', 'join_activities.join_state')
            ->get();

        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }
    public function update(Request $request, $activity_id, $member_id)
    {

        $joinState = $request->input('join_state');
        $user = joinActivities::where('activity_id', $activity_id)
            ->where('member_id', $member_id)
            ->update(['join_state' => $joinState]);

        if (!$user) {
            return response()->json(["error" => "找不到對應的使用者"], 404);
        }



        return response()->json(["message" => "審核狀態已更新成功"]);
    }
    public function deletejoinActivities(Request $request, $activity_id, $member_id)
    {

        $favoriteActivity = joinActivities::where('activity_id', $activity_id)
        ->where('member_id', $member_id)
        ->delete();

        return response()->json([
            'message' => `$favoriteActivity 活動已取消報名`,
        ]);     
    }

    public function reviewActivities($activity_id)
    {
        $activities = joinActivities::join('users', 'users.id', '=', 'join_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'join_activities.activity_id')
            ->select('activities.*', 'users.*', 'join_activities.join_state')
            ->where('join_activities.activity_id', $activity_id)
            ->get();

        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }


    public function favoriteActivities()
    {
        $activities = favoriteActivities::join('users', 'users.id', '=', 'favorite_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'favorite_activities.activity_id')
            ->select('activities.*', 'users.*')
            ->get();

        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function deletefavoriteActivities(Request $request, $activity_id, $member_id)
    {
        $favoriteActivity = favoriteActivities::where('activity_id', $activity_id)
        ->where('member_id', $member_id)
        ->delete();

        return response()->json([
            'message' => `$favoriteActivity 活動已移除收藏`,
        ]);        
    }

    public function store(Request $request)
    {
        $rev = new joinActivities;
        $rev->member_id = $request->input('member_id');
        $rev->activity_id = $request->input('activity_id');
        $rev->save();
    }

    public function joinActivities2( $activity_id)
    {
        $activities = joinActivities::join('users', 'users.id', '=', 'join_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'join_activities.activity_id')
            ->select('activities.*', 'users.*', 'join_activities.join_state')
            ->where('join_activities.activity_id', $activity_id)
            ->get();

        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }

}