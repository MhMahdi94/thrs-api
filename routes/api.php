<?php

use App\Http\Controllers\Api\admin\LeaveRequestController as AdminLeaveRequestController;
use App\Http\Controllers\Api\AllowenceController;
use App\Http\Controllers\Api\AttendenceController;
use App\Http\Controllers\Api\AttendenceStatusController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\EmployeeController;

use App\Http\Controllers\Api\GetUserController;
use App\Http\Controllers\Api\LeaveCheckController;
use App\Http\Controllers\Api\LeaveRequestController;
use App\Http\Controllers\Api\LeaveSlotsController;
use App\Http\Controllers\Api\NewRequestController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\SalaryController;
use App\Http\Controllers\Api\UserController;
use App\Models\LeaveSlot;
use App\Models\NewRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout',[AuthController::class,'logout']);

    Route::apiResource('/current-user',GetUserController::class);

    Route::apiResource('/users',UserController::class);
    Route::apiResource('/companies',CompanyController::class);
    Route::apiResource('/roles',RoleController::class);
    Route::apiResource('/new-request',NewRequestController::class);
    Route::apiResource('/employees',EmployeeController::class);
    Route::apiResource('/allowences',AllowenceController::class);
    Route::apiResource('/departments',DepartmentController::class);
    Route::apiResource('/packages',PackageController::class);
    Route::apiResource('/salaries',SalaryController::class);
    Route::apiResource('/attendence',AttendenceController::class);
    Route::apiResource('/leaveSlots',LeaveSlotsController::class);
    Route::apiResource('/leave-request',LeaveRequestController::class);
    Route::apiResource('/leave-check',LeaveCheckController::class);
    Route::apiResource('/attendence-status',AttendenceStatusController::class);
    //admin
    Route::apiResource('/admin/leave-request',AdminLeaveRequestController::class);
    // Route::put('/new-request/{id}',[NewRequestController::class,'update']);
}) ;

Route::post('/signup',[AuthController::class,'signup']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/new-request',[NewRequestController::class,'store']);
