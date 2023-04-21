<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class Activitycontroller extends Controller
{

    public function index()
    {
        $activities = Activity::all();
        return response()->json($activities, 200, [], JSON_UNESCAPED_UNICODE);
    }

}
