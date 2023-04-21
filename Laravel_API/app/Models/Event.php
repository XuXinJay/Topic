<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Event extends Model
{
    use HasFactory;

    protected $table = 'activities';
    protected $primaryKey = 'activity_id';
    protected $keytype = 'bigint';
    public $timestamp = false;
    protected $fillable = [
        'activity_type',
        'activity_image',
        'activity_name',
        'activity_place',
        'activity_number',
        'activity_partyTime',
        'activity_deadline',
        'activity_payment',
        'activity_budget',
        'activity_board',
        'created_at',
        'updated_at',
        


    ];

    public function getNews()
    {
        $allnews = DB::table('activities')->get();
        return $allnews;
    }
}