<?php

namespace Database\Factories;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CartFactory extends Factory
{
    protected $model = Cart::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
        'customer_id' => User::factory(),
        'total' => $this->faker->numberBetween(1, 999),
        'status' => $this->faker->randomElement(['active', 'pending', 'deleted']),
        'address_street' => $this->faker->streetAddress,
        'address_location' => $this->faker->address,
        'lat_lang' =>$this->faker->latitude . ','. $this->faker->longitude,
        'country' => $this->faker->country,
        'city' => $this->faker->city,
        ];
    }
}
