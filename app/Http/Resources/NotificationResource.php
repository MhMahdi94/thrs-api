<?php

namespace App\Http\Resources;

use App\Models\Allowence;
use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
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
       
        return [
            'id'=>$this->id,
            'user_id'=>$this->user_id,
            'message'=>$this->message,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
