<?php

namespace App\Http\Controllers\API;

use App\Models\Category;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;

class CategoryController extends BaseController
{
    public function index(Request $request): JsonResponse
    {
        $categories = Category::filter($request->all())->isActive()->inRandomOrder()->take($request->limited?: 10)->get(['id', 'name', 'icon', 'icon_type', 'image']);
        return $this->sendResponse(CategoryResource::collection($categories), 'Categories fetched.');
    }
}
