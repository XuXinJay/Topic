<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Message extends Model
{
    use HasFactory;

    protected $table = 'comments';
    protected $primaryKey = 'comment_id';
    protected $keytype = 'bigint';
    public $timestamp = false;
    protected $fillable = [
        'member_id',
        'activity_id',
        'comment_content',
        'created_at',
        'updated_at',

    ];

    public function getNews(Request $request)
    {
        $allnews = DB::table('comments')->get();
        $json = $allnews->toJson();
        return $json;
    }
    
    public function store(Request $request)
    {
        // 從 Request 物件中獲取使用者輸入的 content 資料
        $comment_content = $request->input('comment_content');
        // 建立新的 Message 實例並設定值
        $msg = new Message;
        $msg->member_id = $request->input('member_id');; // 這裡示範直接設定數值，你可以根據需求修改
        $msg->activity_id = $request->input('activity_id');; // 這裡示範直接設定數值，你可以根據需求修改
        $msg->comment_content = $comment_content;
        
        $msg->save();
    }
    

}
