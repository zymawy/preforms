<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Perfume;
use App\Models\PerfumeCategory;
use Illuminate\Support\Facades\DB;

class CartController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCartRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCartRequest $request)
    {
       return DB::transaction(function () use ( $request ) {
           $selectedItems = collect($request->cart_items_ids);
           $ids = $selectedItems->pluck('id');



            $order = Order::query()->create([
                'customer_id' => auth()->id(),
            ]);


            $items = Perfume::query()
                ->whereIn('id', $ids)
            ->get()
            ->each(function ($item)  use ($order, $selectedItems) {
                $m  = $selectedItems->first(fn($m) => $m['id'] === $item->id);
                OrderItem::query()->create([
                   'order_id' => $order->id,
                    'perfume_id' => $item->id,
                    'price' => $item->price * $m['qty'],
                    'quantity' => $m['qty'],
                ]);
            });

           $order->loadMissing('items');
            $order->update(['total' => $order->items->sum('price')]);

            return $order->refresh();
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCartRequest  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCartRequest $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
