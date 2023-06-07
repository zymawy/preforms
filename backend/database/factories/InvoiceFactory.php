<?php

namespace Database\Factories;

use App\Models\Cart;
use App\Models\Invoice;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class InvoiceFactory extends Factory
{
    protected $model = Invoice::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
        'cart_id' => Cart::factory(),
        'customer_id' => User::factory(),
        'total' => $this->faker->numberBetween(1, 999),
        'status' => $this->faker->randomElement(['active', 'pending', 'deleted']),
        ];
    }
}
