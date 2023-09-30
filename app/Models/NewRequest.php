<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewRequest extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'owner',
        'email',
        'mobileNo',
        'address',
        'noOfDepts',
        'noOfEmployee',
        'status'
    ];
}
