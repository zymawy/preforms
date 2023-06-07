<?php

namespace Database\Factories;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\Perfume;
use Illuminate\Database\Eloquent\Factories\Factory;

class CartItemFactory extends Factory
{
    protected $model = CartItem::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cart_id' => Cart::factory(),
            'perfume_id' => Perfume::factory(),
            'quantity' => $this->faker->numberBetween(1, 4),
            'price'  => $this->faker->numberBetween(1, 4),
        ];
    }
}
