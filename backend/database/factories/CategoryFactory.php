<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{

    protected $model = Category::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'icon' => $this->faker->text,
            'image' => 'https://picsum.photos/1000',
            'icon_type' => 'icon_type',
            'active' => $this->faker->boolean(),
        ];
    }
}
