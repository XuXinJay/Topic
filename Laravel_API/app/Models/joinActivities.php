<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class joinActivities extends Model
{
    protected $table = 'join_activities';

    protected $fillable = [
        'join_state',
        
    ];
}