<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Allowence;
use App\Http\Requests\StoreAllowenceRequest;
use App\Http\Requests\UpdateAllowenceRequest;
use App\Http\Resources\AllowenceResource;
use Illuminate\Support\Facades\DB;

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
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAllowenceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAllowenceRequest $request)
    {
        //
        $data=$request->validated();
        // $data['password']=bcrypt($data['password']);
        // $allowence=Allowence::create($data);
        foreach($data['allowances'] as $allowance){
            $allowance['user_id']=$data['user_id'];
            Allowence::create($allowance);
            }
        return response($data,201);//new AllowenceResource($allowence),201);
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
        //$e=DB::table('allowences')->get() ;//where('user_id',$allowence->user_id)->get();
        // $e->company_id=Auth::user()->id;
        $e=Allowence::where('user_id', '=',$allowence->user_id)->get();
        return [...$e, $allowence->user_id];//$allowence->user_id;
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
