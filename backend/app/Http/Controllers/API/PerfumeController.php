<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\StorePerfumeRequest;
use App\Http\Requests\UpdatePerfumeRequest;
use App\Http\Resources\PerfumeResource;
use App\Models\Perfume;
use Illuminate\Http\Request;

class PerfumeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $perfumes = Perfume::query()->has('categories')->with('categories')->inRandomOrder()->limit($request->get('limited', 1000))->get();
        return $this->sendResponse(PerfumeResource::collection($perfumes), 'Perfumes fetched.');
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
     * @param  \App\Http\Requests\StorePerfumeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePerfumeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Perfume  $perfume
     * @return \Illuminate\Http\Response
     */
    public function show(Perfume $perfume)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Perfume  $perfume
     * @return \Illuminate\Http\Response
     */
    public function edit(Perfume $perfume)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePerfumeRequest  $request
     * @param  \App\Models\Perfume  $perfume
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePerfumeRequest $request, Perfume $perfume)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Perfume  $perfume
     * @return \Illuminate\Http\Response
     */
    public function destroy(Perfume $perfume)
    {
        //
    }
}
