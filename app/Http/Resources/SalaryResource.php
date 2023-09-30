<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class SalaryResource extends JsonResource
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
        $user=User::where('id',2)->get();
        return [
            'id'=>$this->id,
            'user_id'=>$this->user_id,
            'user'=>$user,
            'salary'=>$this->salary,
            'allowences'=>$this->allowences,
            'deductions'=>$this->deductions,
            'created_at'=>$this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
