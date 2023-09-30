<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class AttendenceResource extends JsonResource
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
        return [
            'id'=>$this->id,
            'user_id'=>$this->user_id,
            'user'=>$user,
            'company_id'=>$this->company_id,
            'check_in'=>$this->check_in,
            'check_out'=>$this->check_out,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
