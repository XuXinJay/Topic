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
    $activities = OrganizeActivity::join('users', 'users.id', '=', 'organize_activities.member_id')
        ->join('activities', 'activities.activity_id', '=', 'organize_activities.activity_id')
        ->join('join_activities', 'join_activities.activity_id', '=', 'activities.activity_id')
        ->select('activities.*', 'users.name', 'users.member_avatar', 'join_activities.member_id', 'join_activities.join_state')
        ->where('activities.activity_id', $activity_id)
        ->get();

    return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
}


    public function timediff($activity_id)
    {
        $activity = Activity::find($activity_id);

        $now = time(); // 取得現在的時間

        // 將 activity_deadline 欄位的值轉換成 Unix timestamp
        $deadline = strtotime($activity->activity_deadline);

        // 計算兩個時間之間的秒數差
        $timeDiff = $deadline - $now;
        return response()->json(['time_diff' => $timeDiff], 200, [], JSON_UNESCAPED_UNICODE);;
    }
}
