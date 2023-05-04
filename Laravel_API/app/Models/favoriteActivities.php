<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class favoriteActivities extends Model
{
    protected $table = 'favorite_activities';
    protected $fillable = [
        'member_id',
        'activity_id _id',
        
    ];
}