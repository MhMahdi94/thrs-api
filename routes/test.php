<?php

use App\Http\Controllers\Api\test\TestController;
use Illuminate\Routing\Route;

Route::get('/test',[TestController::class,'index']);
?>