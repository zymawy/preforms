<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Category;
use App\Models\Invoice;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Perfume;
use App\Models\PerfumeCategory;
use App\Models\User;
use Database\Factories\PerfumeFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Perfume::factory()
            ->count(10)
            ->create();

        User::factory()
            ->count(2)
            ->create();

        Perfume::factory()
            ->count(10)
            ->create();

        Category::factory()
            ->count(10)
            ->create();

        PerfumeCategory::factory()
            ->count(199)
            ->create();


        Cart::factory()
            ->count(10)
            ->create();

        CartItem::factory()
            ->count(10)
            ->create();

        Order::factory()
            ->count(10)
            ->create();


        OrderItem::factory()
            ->count(10)
            ->create();

        Brand::factory()
            ->count(10)
            ->create();

        Invoice::factory()
            ->count(10)
            ->create();

        // \App\Models\User::factory(10)->create();
        //$this->call([
        //    CategorySeeder::class
        //]);
    }
}
