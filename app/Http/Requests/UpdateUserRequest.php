<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
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
            'name'=>'string|max:55',
            'email'=>'email|unique:users,email,'.$this->id,
            'companyName'=>'string|max:55',
            'mobileNo'=>'string|max:16',
            'status'=>'boolean',
            'password'=>[
                'confirmed',
                Password::min(8)
                ->letters()
                ->symbols()
            ]
        ];
    }
}
