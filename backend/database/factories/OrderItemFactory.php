<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Perfume;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderItemFactory extends Factory
{
    protected $model = OrderItem::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
        'order_id' => Order::factory(),
        'perfume_id' => Perfume::factory(),
        'quantity' => $this->faker->numberBetween(1, 4),
        'price'  => $this->faker->numberBetween(1, 4)
        ];
    }
}
