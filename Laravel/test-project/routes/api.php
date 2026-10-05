<?php

use App\Http\Controllers\UserManagement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('/usermanagement',[UserManagement::class,"index"]);
Route::post('/usermanagement',[UserManagement::class,"store"]);
