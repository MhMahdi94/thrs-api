<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Salary>
 */
class SalaryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //
            'user_id'=>fake()->numberBetween(0,20),
            'salary'=>fake()->numberBetween(10000,1000000),
            'allowences'=>fake()->numberBetween(2000,8000),
            'deductions'=>fake()->numberBetween(2000,10000)
        ];
    }
}
