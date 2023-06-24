<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\StorePerfumeRequest;
use App\Http\Requests\UpdatePerfumeRequest;
use App\Http\Resources\PerfumeResource;
use App\Models\Perfume;
use Illuminate\Http\Request;

class SearchController extends BaseController
{


    public function __invoke(Request $request)
    {

        $keyword = $request->get('q');

        $perfumes = Perfume::query()
            ->where('name', 'LIKE', "%$keyword%")
            ->orWhere('description', 'LIKE', "%$keyword%")
            ->whereHas('brand', function (\Illuminate\Database\Eloquent\Builder  $q1) use ($keyword) {
                $q1->where('brands.name', 'LIKE',"%$keyword%");
            })
            ->inRandomOrder()->limit($request->get('limited', 1000))
            ->get();

        return $this->sendResponse(PerfumeResource::collection($perfumes), 'Perfumes fetched.');
    }
}
