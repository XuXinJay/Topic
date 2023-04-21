<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $primaryKey = 'activity_id';

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
    ];
}
