<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class BrandResource extends \Illuminate\Http\Resources\Json\JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return array_merge(['image' => 'https://cdn.salla.sa/yrlRO/6t4BpzuUGVWFiZiud4FzIr1HFuxeoXMFh9PcefKC.jpg'],parent::toArray($request));
    }
}
