<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Models\Allowence;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use sirajcse\UniqueIdGenerator\UniqueIdGenerator;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return EmployeeResource::collection(
            Employee::query()->where('company_id',Auth::id())->orderBy('id', 'asc')->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEmployeeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmployeeRequest $request)
    {
        //
        $data = $request->validated();
        $data['password'] = bcrypt($request['password']);
        $data['name'] = $request['name'];
        $data['mobileNo'] = $request['mobileNo'];
        $data['role'] = $request['role'];
        $data['email'] = $request['email'];

        $count = User::query()->count() + 1;
        $data['uid'] = UniqueIdGenerator::generate(['table' => 'users', 'length' => 16, 'prefix' => date('ymd'), 'suffix' => $count]);
        $user = User::create($data);

        //employement data
        $infoData = $request['infoData'];
        $infoData['user_id'] = $user['id'];
     $infoData['company_id']=Auth::id();
        Employee::create($infoData);
        foreach ($request['allowances'] as $allowance) {
            $allowance['user_id'] = $user['id'];
            Allowence::create($allowance);
        }
        return $request; //response(new EmployeeResource($user),201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
        // $e=DB::table('employees')->where('user_id',$employee->user_id)->first();
        // // $e->company_id=Auth::user()->id;
        // return [$e,$employee->user_id];
        return new EmployeeResource($employee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEmployeeRequest  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        //
        try {
            //code...
            $data = $request->validated();
        $data['password'] = bcrypt($request['password']);
        $data['name'] = $request['name'];
        $data['mobileNo'] = $request['mobileNo'];
        $data['role'] = $request['role'];
        $data['email'] = $request['email'];
        $userId=$request['userId'];
        
        DB::table('users')
            ->where('id', $userId)
            ->limit(1)
            ->update($data);
        // //return;
         //employement data
        $infoData = $request['infoData'];
        $employee->update($infoData);

        // //allownece
        foreach ($request['allowances'] as $allowance) {
            DB::table('allowences')
                ->where('user_id', $userId)
                ->limit(1)
                ->update($allowance);
       }
        return $request;
        } catch (\Throwable $th) {
            //throw $th;
            return $th;
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
        $employee->delete();

        return response('', 204);
    }
}
