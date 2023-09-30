<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'company_id',
        'dept_id',
        'jobTitle',
        'jobType',
        'status',
        'salary',
        'created_at'
    ];
}
