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
        'bodycraft',
        'cooking',
        'travel',
        'bar',
        'music',
        'picnic',
        'party',
        'activity_id',
        'created_at',
        'updated_at'
    ];
}
