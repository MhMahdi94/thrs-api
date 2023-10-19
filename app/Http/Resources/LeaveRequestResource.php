<?php

namespace App\Http\Resources;

use App\Models\Allowence;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class LeaveRequestResource extends JsonResource
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
        $user=User::query()->where('id',$this->user_id)->get();
         return [
            'id'=>$this->id,
            'leaveType'=>$this->leaveType,
            'startLeave'=>$this->startLeave,
            'endLeave'=>$this->endLeave,
            'reason'=>$this->reason,
            'userId'=>$this->user_id,
            'user'=>$user[0],
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
