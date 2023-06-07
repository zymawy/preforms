<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\StorePerfumeCategoryRequest;
use App\Http\Requests\UpdatePerfumeCategoryRequest;
use App\Models\PerfumeCategory;

class PerfumeCategoryController extends Controller
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
     * @param  \App\Http\Requests\StorePerfumeCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePerfumeCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PerfumeCategory  $perfumeCategory
     * @return \Illuminate\Http\Response
     */
    public function show(PerfumeCategory $perfumeCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PerfumeCategory  $perfumeCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(PerfumeCategory $perfumeCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePerfumeCategoryRequest  $request
     * @param  \App\Models\PerfumeCategory  $perfumeCategory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePerfumeCategoryRequest $request, PerfumeCategory $perfumeCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PerfumeCategory  $perfumeCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(PerfumeCategory $perfumeCategory)
    {
        //
    }
}
