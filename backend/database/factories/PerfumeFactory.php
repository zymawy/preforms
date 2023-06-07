<?php

namespace Database\Factories;

use App\Models\Perfume;
use Illuminate\Database\Eloquent\Factories\Factory;

class PerfumeFactory extends Factory
{
    protected $model = Perfume::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $handle = fopen(database_path('/factories/images.csv'), "r");$c = collect();while ($csvLine = fgetcsv($handle, 1000, ",")) {
            $c->push($csvLine[0]);
        }

        $orgs = collect();
        $c->map(fn($m) => json_decode($m, true))
            ->each(function ($v) use(&$orgs) {
            $orgs->push($v['standard_resolution']['url']);
        });

        $values = $orgs->values()->toArray();

        return [
            'name' => $this->faker->name,
            'description' => $this->faker->realText(1000),
            'price' => $this->faker->numberBetween(1, 999),
            'quantity' => $this->faker->numberBetween(1, 999),
            'image' => $this->faker->randomElement($values),
        ];
    }
}
