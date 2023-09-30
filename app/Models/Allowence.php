<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Allowence extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'allName',
        'allVal',
        'created_at'];
}
