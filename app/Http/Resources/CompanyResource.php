<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
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
            'email'=>$this->email,
            'owner'=>$this->owner,
            'description'=>$this->description,
            'noOfDept'=>$this->noOfDept,
            'noOfEmployee'=>$this->noOfEmployee,
            'isActive'=>$this->isActive,
            'subscriptionStart'=>$this->subscriptionStart,
            'subscriptionEnd'=>$this->subscriptionEnd,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
