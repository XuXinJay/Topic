<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;
use App\Models\PartyType;
use App\Models\OrganizeActivity;
use Illuminate\Support\Facades\DB;


class OrganizeActivityController extends Controller
{
    public function index()
    {
        $activities = OrganizeActivity::join('users', 'users.id', '=', 'organize_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'organize_activities.activity_id')
            ->join('party_type', 'party_type.party_type_id', '=', 'activities.activity_id',)
            ->select('activities.*', 'users.name', 'party_type.*')
            ->get();


        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function notify()
    {
        $activities = DB::table('notifications')
            ->join('users', 'users.id', '=', 'notifications.member_id')
            ->join('notification_contents', 'notification_contents.notify_id', '=', 'notifications.notify_id')
            ->select('notification_contents.*', 'users.id')
            ->get()
            ->sortByDesc('created_at');

        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function notify2()
    {
        $activities = DB::table('notification_contents')
            ->where("notification_type" ,'=', "系統")
            ->get()
            ->sortByDesc('notify_id');

        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function createActivity(Request $request)
    {
        $activity = new Activity;
        $activity->activity_image = $request->input("defaultImg");
        $activity->activity_name = $request->input("activityName");
        $activity->activity_place = $request->input("activityPlace");
        $activity->activity_number = $request->input("activityCount");
        $activity->activity_partyTime = $request->input("activityStartDate");
        $activity->activity_endTime = $request->input("activityEndDate");
        $activity->activity_deadline = $request->input("activityDeadLine");
        $activity->activity_payment = $request->input("activityPayment");
        $activity->activity_budget = $request->input("activityBudget");
        $activity->activity_board = $request->input("activityText");
        $activity->save();
        
        $partyType = new PartyType;
        $partyType->movie = $request->input("activityType.0");
        $partyType->board_game = $request->input("activityType.1");
        $partyType->dine_together = $request->input("activityType.2");
        $partyType->read = $request->input("activityType.3");
        $partyType->sports = $request->input("activityType.4");
        $partyType->shopping = $request->input("activityType.5");
        $partyType->painting = $request->input("activityType.6");
        $partyType->bodycraft = $request->input("activityType.7");
        $partyType->cooking = $request->input("activityType.8");
        $partyType->travel = $request->input("activityType.9");
        $partyType->bar = $request->input("activityType.10");
        $partyType->music = $request->input("activityType.11");
        $partyType->picnic = $request->input("activityType.12");
        $partyType->party = $request->input("activityType.13");
        
        // $partyType->board_game = false;
        // 其他欄位設置
        $partyType->activity_id = $activity->activity_id;

        $partyType->save();
        //organizeActivity
        $organizeActivity = new organizeActivity;
        $organizeActivity->activity_id = $activity->activity_id;
        $organizeActivity->member_id = $request->input("memberId");
        $organizeActivity->save();
    }

}
