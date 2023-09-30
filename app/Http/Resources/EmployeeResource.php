<?php

namespace App\Http\Resources;

use App\Models\Allowence;
use App\Models\Employee;
use App\Models\JobType;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
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
        $user=User::where('id',$this->user_id)->get();
        $jobType=JobType::all()->where('id',$this->jobType);
        $infoData=Employee::where('user_id',$this->user_id)->get();
        $allowences=Allowence::where('user_id',$this->user_id)->get();
        
        return [
            'id'=>$this->id,
            'user'=>$user,
           'name'=>$user[0]->name,
            // 'name'=>$this->user_id,
            'infoData'=>$infoData,
            // $user),
            'allowence'=>$allowences,
            'user_id'=>$this->user_id,
            'dept_id'=>$this->dept_id,
            'comapny_id'=>$this->comapny_id,
            'salary'=>$this->salary,
            'jobTitle'=>$this->jobTitle,
            'jobType'=>$jobType,
            'status'=>$this->status,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
