<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Attendence;
use App\Http\Requests\StoreAttendenceRequest;
use App\Http\Requests\UpdateAttendenceRequest;
use App\Http\Resources\AttendenceResource;
use Illuminate\Support\Facades\Auth;

class AttendenceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return AttendenceResource::collection(Attendence::query()
        ->where('company_id',Auth::id())    
        ->groupBy('user_id')
            
            ->orderBy('id','desc')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAttendenceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAttendenceRequest $request)
    {
        //
        try {
            //code...
            $data=$request->validated();
            $attendece=Attendence::create($data);
            
            return response(new AttendenceResource($attendece),201);
    
        } catch (\Throwable $th) {
            return $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Attendence  $attendence
     * @return \Illuminate\Http\Response
     */
    public function show(Attendence $attendence)
    {
        //
        return $attendence;//Attendence::query()->where('user_id',$attendence['user_id'])->latest()->get()[0];//AttendenceResource::collection(Attendence::query()->where('user_id',$attendence['user_id'])->paginate(10));// $attendence;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAttendenceRequest  $request
     * @param  \App\Models\Attendence  $attendence
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAttendenceRequest $request, Attendence $attendence)
    {
        //
        try {
            $data=$request->validated();
            $attendence->update($data);
            return new AttendenceResource($attendence);
    
            //code...
        } catch (\Throwable $th) {
            return $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Attendence  $attendence
     * @return \Illuminate\Http\Response
     */
    public function destroy(Attendence $attendence)
    {
        //
    }
}
