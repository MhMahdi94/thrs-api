<?php

namespace App\Http\Resources;

use App\Models\Option;
use Illuminate\Http\Resources\Json\JsonResource;

class PackageResource extends JsonResource
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
        $options=Option::where('package_id',$this->id)->get();
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'options'=>$options,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
