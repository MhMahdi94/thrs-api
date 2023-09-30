<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewRequest;
use App\Http\Requests\StoreNewRequestRequest;
use App\Http\Requests\UpdateNewRequestRequest;
use App\Http\Resources\NewRequestResource;

class NewRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return NewRequestResource::collection(
            NewRequest::query()->orderBy('id','asc')->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreNewRequestRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNewRequestRequest $request)
    {
        //
        $data=$request->validated();
        $newRequest=NewRequest::create($data);
        return response(new NewRequestResource($newRequest),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NewRequest  $newRequest
     * @return \Illuminate\Http\Response
     */
    public function show(NewRequest $newRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateNewRequestRequest  $request
     * @param  \App\Models\NewRequest  $newRequest
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateNewRequestRequest $request, NewRequest $newRequest)
    {
        
        $data=$request->validated();
        $data['status']=true;
        $newRequest->update($data);
        return new NewRequestResource($newRequest);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NewRequest  $newRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(NewRequest $newRequest)
    {
        //
        $newRequest->delete();

        return response($newRequest,204);
    }
}
