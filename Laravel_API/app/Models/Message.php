<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Message extends Model
{
    use HasFactory;

    protected $table = 'message';
    protected $primaryKey = 'id';
    protected $keytype = 'int';
    public $timestamp = false;
    protected $fillable = [
        'member_id',
        'activily_id',
        'content',
        'created_at',
        'updated_at',

    ];

    public function getNews(Request $request)
    {
        $allnews = DB::table('message')->get();
        $json = $allnews->toJson();
        return $json;
    }
    //新增
    public static function createMessage($memberId, $activityId, $message)
    {
        $newMessage = new Message([
            'member_id' => $memberId,
            'activity_id' => $activityId,
            'content' => $message
        ]);
        $newMessage->save();
        return $newMessage;
    }
    public function store(Request $request)
    {
        // 從 Request 物件中獲取使用者輸入的 content 資料
        $content = $request->input('content');
        // 建立新的 Message 實例並設定值
        $msg = new Message;
        $msg->member_id = 1; // 這裡示範直接設定數值，你可以根據需求修改
        $msg->activily_id = 1; // 這裡示範直接設定數值，你可以根據需求修改
        $msg->content = $content;
        
        $msg->save();
    }
    //刪除
    public static function deleteMessage($id)
    {
        $message = Message::find($id);
        if ($message) {
            $message->delete();
        }
    }

}
