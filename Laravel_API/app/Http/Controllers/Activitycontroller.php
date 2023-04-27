<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\OrganizeActivity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Activitycontroller extends Controller
{

    public function index($activity_id)
    {
        // $activities = Activity::where('activity_id',$activity_id)->get();
        $activities = OrganizeActivity::join('users', 'users.id', '=', 'organize_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'organize_activities.activity_id')
            ->select('activities.*', 'users.name', 'users.member_avatar')
            ->where('activities.activity_id', $activity_id)
            ->get();

        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function timediff($activity_id)
    {
        $timeDiff = DB::table('activities')
            ->select(DB::raw('TIMESTAMPDIFF(SECOND, activity_partyTime, activity_deadline) AS time_diff'))
            ->where('activity_id', $activity_id)
            ->first();
        return $timeDiff;
    }
}
