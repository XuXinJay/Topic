<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrganizeActivity extends Model
{
    protected $table = 'organize_activities';
    protected $primaryKey = 'id';
    protected $fillable = [
        'member_id',
        'activity_id',
        'created_at',
        'updated_at',
    ];
    
}