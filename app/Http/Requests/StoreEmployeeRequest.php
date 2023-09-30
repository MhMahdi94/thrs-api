<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            // 'user_id'=>'required|integer',
            // 'company_id'=>'required|integer',
            // 'dept_id'=>'required|integer',
            // 'salary'=>'required|numeric',
            // 'jobTitle'=>'required|string|max:64',
            // 'jobType'=>'required|integer',
            // 'status'=>'required|boolean',
            
           
        ];
    }
}
