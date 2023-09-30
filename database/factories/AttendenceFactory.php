<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Attendence>
 */
class AttendenceFactory extends Factory
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
            'user_id'=>fake()->numberBetween(1,2),
            'company_id'=>fake()->numberBetween(1,2),
            'check_in'=>fake()->dateTime(),
            'check_out'=>fake()->dateTime(),
        ];
    }
}
