<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaveRequest extends Model
{
    use HasFactory;
    protected $fillable = [
        'startLeave',
        'endLeave',
        'leaveType',
        'reason',
        'user_id',
        'company_id'
    ];
}
