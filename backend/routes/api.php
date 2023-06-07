<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('v1')->group(function(){
    Route::post('login', [AuthController::class, 'signIn']);
    Route::post('register', [AuthController::class, 'signUp']);

    Route::middleware('auth:sanctum')->group( function () {
        // get user data
        Route::get('user', [AuthController::class, 'user']);

        Route::resource('categories', CategoryController::class);
        Route::resource('perfumes', \App\Http\Controllers\API\PerfumeController::class);
        Route::resource('brands', \App\Http\Controllers\API\BrandController::class);
        Route::resource('carts', \App\Http\Controllers\API\CartController::class);
    });
});
