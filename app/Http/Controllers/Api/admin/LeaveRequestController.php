<?php

namespace App\Http\Controllers\Api\admin;

use App\Models\LeaveRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateLeaveRequestRequest;
use App\Http\Resources\LeaveRequestResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LeaveRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return LeaveRequestResource::collection(
            LeaveRequest::query()->where('company_id',Auth::id())->where('status',0)->orderBy('id','asc')->paginate(10)
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LeaveRequest  $leaveRequest
     * @return \Illuminate\Http\Response
     */
    public function show(LeaveRequest $leaveRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LeaveRequest  $leaveRequest
     * @return \Illuminate\Http\Response
     */
    public function edit(LeaveRequest $leaveRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LeaveRequest  $leaveRequest
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLeaveRequestRequest $request, LeaveRequest $leaveRequest)
    {
        //
        try {
            //code...
            $data=$request->validated();
       

        $leaveRequest->update($data);
        return $request;
        } catch (\Throwable $th) {
            return $th;
            //return response($th,400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LeaveRequest  $leaveRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(LeaveRequest $leaveRequest)
    {
        //
    }
}
