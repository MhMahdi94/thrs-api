<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name'=>fake()->company(),
            'owner'=>fake()->sentence(),
            'email'=>fake()->companyEmail(),
            'description'=>fake()->companySuffix(),
            'noOfDept'=>fake()->numberBetween(0,10),
            'noOfEmployee'=>fake()->numberBetween(0,500),
            'isActive'=>rand(0,1),
            'subscriptionStart'=>fake()->dateTime(),
            'subscriptionEnd'=>fake()->dateTime(),
        ];
    }
}
