<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
class EventController extends Controller
{
    protected $event;

    public function __construct()
    {
        $this->event = new Event;
    }

    public function index(Request $request)
    {
        
        $result = $this->event->getNews();
        $data = response()->json($result,200,[],JSON_UNESCAPED_UNICODE);
        return $data;
    }

}