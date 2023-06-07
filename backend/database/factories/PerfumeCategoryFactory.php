<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Perfume;
use App\Models\PerfumeCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class PerfumeCategoryFactory extends Factory
{
    protected $model = PerfumeCategory::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'perfume_id' => Perfume::factory(),
            'category_id' => Category::factory(),
        ];
    }
}
