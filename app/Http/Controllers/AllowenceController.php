<?php

namespace App\Http\Controllers;

use App\Models\Allowence;
use App\Http\Requests\StoreAllowenceRequest;
use App\Http\Requests\UpdateAllowenceRequest;

class AllowenceController extends Controller
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
     * @param  \App\Http\Requests\StoreAllowenceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAllowenceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Allowence  $allowence
     * @return \Illuminate\Http\Response
     */
    public function show(Allowence $allowence)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Allowence  $allowence
     * @return \Illuminate\Http\Response
     */
    public function edit(Allowence $allowence)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAllowenceRequest  $request
     * @param  \App\Models\Allowence  $allowence
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAllowenceRequest $request, Allowence $allowence)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Allowence  $allowence
     * @return \Illuminate\Http\Response
     */
    public function destroy(Allowence $allowence)
    {
        //
    }
}
