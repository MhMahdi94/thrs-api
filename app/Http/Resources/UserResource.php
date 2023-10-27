<?php

namespace App\Http\Resources;

use App\Models\Allowence;
use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public static $wrap=false;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $employee=Employee::where('user_id',$this->id)->get();
        $allowence=Allowence::where('user_id',$this->id)->get();
        $department=Department::where('head',$this->id)->get();
       
        if($department!=[]){
            $data['head']=$department[0]->head;
            $data['attendence']=$department[0]->attendence;
            
        }else{
            $data['head']= -1;
        }
        
        return [
            'id'=>$this->id,
            'uid'=>$this->uid,
            'name'=>$this->name,
            'email'=>$this->email,
            'department'=>$data,
            'employee'=>$employee[0]??[],
            'allowence'=>$allowence??[],
            'comapnyName'=>$this->comapnyName,
            'role'=>$this->role,
            'status'=>$this->status,
            'mobileNo'=>$this->mobileNo,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
