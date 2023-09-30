<?php

namespace App\Http\Controllers;

use App\Models\SlotLeave;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSlotLeaveRequest;
use App\Http\Requests\UpdateSlotLeaveRequest;

class SlotLeaveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    }
}
