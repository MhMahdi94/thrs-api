<?php

namespace App\Http\Controllers\Api;

use App\Models\Attendence;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateAttendenceRequest;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AttendenceStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user=Auth::user();
        $data=Employee::where("user_id",$user->id)->get()[0];
        $list=Attendence::where("company_id",$data["company_id"],)->where('isConfirm',0)->get();
        $response['data']= $list;
        foreach ($response['data'] as $item) {
            $u=User::where('id',$item->user_id)->first();
            $item['user']=$u;
        }
        return  $response;
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
        try {
            //code...
           $value=Attendence::query()->where('user_id',$request['user_id'])->latest()->first() ;//getModel()->where('user_id',$request['user_id'])->first();
           return $value;
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
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Attendence  $attendence
     * @return \Illuminate\Http\Response
     */
    public function edit(Attendence $attendence)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Attendence  $attendence
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAttendenceRequest $request, Attendence $attendence)
    {
        //
        try {
            //code...
            $data=$request->validated();
            $attendence_q = Attendence::firstOrNew([
                'id' => $request['att_id']
            ]);
            $attendence_q->isConfirm = $request->isConfirm;

            $attendence_q->update();
            $response_update['data']= $attendence_q;
            return response($response_update,200);
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
