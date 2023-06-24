<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @extends \App\Models\Perfume
 */
class PerfumeResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->image,
            'description' => $this->description,
            'price' => $this->price,
            'quantity' => $this->quantity,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'brand' => new BrandResource($this->whenLoaded('brand')),
            'gallery' => [
                'https://cdn.salla.sa/yrlRO/x1x5qjVc0pAqpPMSvMWjsPbgk7CksGIzLAKl7qqV.jpg',
                'https://cdn.salla.sa/yrlRO/6t4BpzuUGVWFiZiud4FzIr1HFuxeoXMFh9PcefKC.jpg',
                'https://cdn.salla.sa/yrlRO/CmIXXpKi3eW3aiAZ3PIsaKAtT4UJ1ZuHeX9p5dTJ.png'
            ]
        ];
    }
}
