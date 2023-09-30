<?php

namespace App\Http\Controllers\Api;

use App\Models\SlotLeave;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSlotLeaveRequest;
use App\Http\Requests\UpdateSlotLeaveRequest;
use App\Http\Resources\SlotLeaveResource;

class LeaveSlotsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return SlotLeaveResource::collection(
            SlotLeave::query()->orderBy('id','asc')->paginate(10)
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
     * @param  \App\Http\Requests\StoreSlotLeaveRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSlotLeaveRequest $request)
    {
        //
        $data=$request->validated();
        try {
            //code...
            $department=SlotLeave::create($data);
        return response($department,201);
        } catch (\Throwable $th) {
            //throw $th;
        return response($th,201);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SlotLeave  $slotLeave
     * @return \Illuminate\Http\Response
     */
    public function show(SlotLeave $slotLeave)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SlotLeave  $slotLeave
     * @return \Illuminate\Http\Response
     */
    public function edit(SlotLeave $slotLeave)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSlotLeaveRequest  $request
     * @param  \App\Models\SlotLeave  $slotLeave
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSlotLeaveRequest $request, SlotLeave $slotLeave)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SlotLeave  $slotLeave
     * @return \Illuminate\Http\Response
     */
    public function destroy(SlotLeave $slotLeave)
    {
        //
        try {
            //code...
            $slotLeave->delete();
            return response('',204);
    
        } catch (\Throwable $th) {
            //throw $th;
            return response($th,204);
    
        }
    }
}
