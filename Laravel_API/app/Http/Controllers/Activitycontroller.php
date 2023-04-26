<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class Activitycontroller extends Controller
{

    public function index($activity_id)
    {
        $activities = Activity::where('activity_id',$activity_id)->get();
        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }

}
