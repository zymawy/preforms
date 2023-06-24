<?php

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;

class BrandFactory extends Factory
{
    protected $model = Brand::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement(['Burberry', 'Calvin Klein', 'Armani', 'Guerlain', 'Yves Saint Laurent', 'Dior']),
            'image' => $this->faker->randomElement(['https://w7.pngwing.com/pngs/914/297/png-transparent-logo-brand-guerlain-perfume-la-petite-robe-noire-perfume-miscellaneous-angle-emblem.png', 'https://w7.pngwing.com/pngs/636/573/png-transparent-ysl.png', 'https://www.dior.com/couture/var/dior/storage/images/horizon/logo-dior/logo/25334706-1-fre-FR/logo_1440_1200.jpg', 'https://w7.pngwing.com/pngs/922/827/png-transparent-armani-junior-italian-fashion-armani-jeans-luxury-brand-miscellaneous-text-trademark.png', 'https://w7.pngwing.com/pngs/440/653/png-transparent-calvin-klein-logo-calvin-klein-logo-t-shirt-ck-be-brand-others-angle-text-fashion.png'
            ,'']),
        ];
    }
}
