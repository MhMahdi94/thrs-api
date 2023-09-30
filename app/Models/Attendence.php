<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendence extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'company_id',
        'check_in',
        'check_out',
        'created_at'
    ];
}
