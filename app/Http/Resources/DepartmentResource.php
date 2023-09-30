<?php

namespace App\Http\Resources;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentResource extends JsonResource
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
        $employee=Employee::where('user_id',$this->head)->get();
        $user=User::where('id',$employee[0]->user_id)->get();
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'head'=>$user[0]->id,
            'headName'=>$user[0]->name,
            'company_id'=>$this->company_id,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
