<?php

namespace App\Http\Controllers;

use App\Models\notification_tokens;
use App\Http\Controllers\Controller;
use App\Http\Requests\Storenotification_tokensRequest;
use App\Http\Requests\Updatenotification_tokensRequest;
use App\Http\Resources\NotificationTokensResource;

class NotificationTokensController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $token=notification_tokens::query()->where("user_id", auth()->user()->id)->first();
        return new NotificationTokensResource($token);
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
     * @param  \App\Http\Requests\Storenotification_tokensRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storenotification_tokensRequest $request)
    {
        //
        $data=$request->validated();
        $token=notification_tokens::query()->where("user_id",$data["user_id"])->first();
        if($token){
            $response['msg']='token updated successfully';
            $token->update($data);
            return response($response,201);
        }else{
            
            $notification_token=notification_tokens::create($data);
            return response(new NotificationTokensResource($notification_token),201);
        }
       
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\notification_tokens  $notification_tokens
     * @return \Illuminate\Http\Response
     */
    public function show(notification_tokens $notification_tokens)
    {
        //
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\notification_tokens  $notification_tokens
     * @return \Illuminate\Http\Response
     */
    public function edit(notification_tokens $notification_tokens)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updatenotification_tokensRequest  $request
     * @param  \App\Models\notification_tokens  $notification_tokens
     * @return \Illuminate\Http\Response
     */
    public function update(Updatenotification_tokensRequest $request, notification_tokens $notification_tokens)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\notification_tokens  $notification_tokens
     * @return \Illuminate\Http\Response
     */
    public function destroy(notification_tokens $notification_tokens)
    {
        //
    }
}
