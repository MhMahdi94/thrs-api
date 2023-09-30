<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NewRequestResource extends JsonResource
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
            'name'=>$this->name,
            'owner'=>$this->owner,
            'email'=>$this->email,
            'address'=>$this->address,
            'mobileNo'=>$this->mobileNo,
            'noOfEmployee'=>$this->noOfEmployee,
            'noOfDepts'=>$this->noOfDepts,
            'status'=>$this->status,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
