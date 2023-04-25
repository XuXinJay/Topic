<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrganizeActivity;
use App\Models\joinActivities;
use App\Models\favoriteActivities;

class JoinActivityController extends Controller
{
    public function organizeActivities()
    {
        $activities = OrganizeActivity::join('users', 'users.id', '=', 'organize_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'organize_activities.activity_id')
            ->select('activities.*', 'users.*')
            ->get();

        
        return response()->json($activities,200,[],JSON_UNESCAPED_UNICODE);
    }
    
    
    
    
    public function joinActivities()
    {
        $activities = joinActivities::join('users', 'users.id', '=', 'join_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'join_activities.activity_id')
            ->select('activities.*', 'users.*','join_activities.join_state')
            ->get();

        
        return response()->json($activities,200,[],JSON_UNESCAPED_UNICODE);
    }





    public function favoriteActivities()
    {
        $activities = favoriteActivities::join('users', 'users.id', '=', 'favorite_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'favorite_activities.activity_id')
            ->select('activities.*', 'users.*')
            ->get();

        
        return response()->json($activities,200,[],JSON_UNESCAPED_UNICODE);
    }

}
