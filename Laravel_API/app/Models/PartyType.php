<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartyType extends Model
{
    use HasFactory;
    protected $table = 'party_type';
    protected $fillable = [
        'movie',
        'board_game',
        'dine_together',
        'read',
        'sports',
        'shopping',
        'painting',
        'baking',
        'cooking',
        'music',
        'picnic',
        'yoga',
        'flower_arrangement',
        'pet',
        'activity_id',
        'created_at',
        'updated_at'
    ];
}
