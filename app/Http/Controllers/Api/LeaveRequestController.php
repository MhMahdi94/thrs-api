<?php

namespace App\Http\Controllers\Api;

use App\Models\LeaveRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLeaveRequestRequest;
use App\Http\Requests\UpdateLeaveRequestRequest;
use App\Http\Resources\LeaveRequestResource;
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
            LeaveRequest::query()->where('user_id',Auth::id())->orderBy('id','asc')->paginate(10)
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
     * @param  \App\Http\Requests\StoreLeaveRequestRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLeaveRequestRequest $request)
    {
        //
        try {
            //code...
            $data=$request->validated();
            $data['user_id']=Auth::id();
            $leave_request=LeaveRequest::create($data);
            
            return response(new LeaveRequestResource($leave_request),201);
    
        } catch (\Throwable $th) {
            return $th;
        }
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
        return $leaveRequest;
        // LeaveRequestResource::collection(
        //     LeaveRequest::query()->where('user_id',$leaveRequest['user_id'])->orderBy('id','asc')->paginate(10)
        // );
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
     * @param  \App\Http\Requests\UpdateLeaveRequestRequest  $request
     * @param  \App\Models\LeaveRequest  $leaveRequest
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLeaveRequestRequest $request, LeaveRequest $leaveRequest)
    {
        //
        try {
            //code...
            $data=$request->validated();
            $d=LeaveRequest::query()->where('id',$leaveRequest['id'])->update([
                'status'=>$data['status'],
            ]);

        //   $leaveRequest->update($data);
          return $leaveRequest;
        } catch (\Throwable $th) {
            return $th;
        }
          //code...
         
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
