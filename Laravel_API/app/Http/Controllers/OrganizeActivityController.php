<?php
namespace App\Http\Controllers;

use App\Models\OrganizeActivity;
use Illuminate\Support\Facades\DB;


class OrganizeActivityController extends Controller
{
    public function index()
    {
        $activities = OrganizeActivity::join('users', 'users.id', '=', 'organize_activities.member_id')
            ->join('activities', 'activities.activity_id', '=', 'organize_activities.activity_id')
            ->join('party_type', 'party_type.party_type_id', '=', 'activities.activity_id', )
            ->select('activities.*', 'users.name', 'party_type.*')
            ->get();

        
        return response()->json($activities,200,[],JSON_UNESCAPED_UNICODE);
    }

    public function notify()
    {
        $activities = DB::table('notifications')
                ->join('users', 'users.id', '=', 'notifications.member_id')
                ->join('notification_contents', 'notification_contents.notify_id', '=', 'notifications.notify_id')
                ->select('notification_contents.*', 'users.id')
                ->get();
        
        return response()->json($activities,200,[],JSON_UNESCAPED_UNICODE);
    }

}