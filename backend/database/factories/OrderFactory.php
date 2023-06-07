<?php

namespace Database\Factories;

use App\Models\Cart;
use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    protected $model = Order::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
        'customer_id' => User::factory(),
        'cart_id' => Cart::factory(),
        'total' => $this->faker->numberBetween(1, 999)
        ];
    }
}
