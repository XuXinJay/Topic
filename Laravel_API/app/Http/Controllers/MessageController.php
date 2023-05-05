<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    protected $message;

    public function __construct()
    {
        $this->message = new Message;
    }

    public function store(Request $request)
    {
        $this->message->store($request);


        // 返回回應或其他操作
        return ($request);
    }

    public function index(Request $request)
    {
        $allnews = DB::table('comments')
            ->join('users', 'id', '=', 'comments.member_id')
            ->select('comments.*', 'users.name', 'users.member_avatar')
            ->get();
        $json = $allnews->toJson();
        return $json;
    }

    //刪除
    public function deleteMessage($id)
    {
        $comment_id = $id;

        // 通過消息的 ID 查找要刪除的消息
        $comment_id = Message::find($comment_id);

        if (!$comment_id) {
            return response()->json([
                'message' => '消息不存在',
                'id' => $id
            ], 404);
        }

        // 刪除消息
        $comment_id->delete();

        return response()->json([
            'message' => '消息已刪除'
        ]);
    }
}
