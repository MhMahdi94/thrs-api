<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SlotLeave extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'leave_date',
    ];
}
