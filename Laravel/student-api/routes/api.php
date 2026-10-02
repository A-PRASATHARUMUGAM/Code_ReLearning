<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// GET       /api/students
// POST      /api/students
// GET       /api/students/{student}
// PUT       /api/students/{student}
// PATCH     /api/students/{student}
// DELETE    /api/students/{student}

Route::get('/students',[StudentController::class, "index"]);
Route::post('/students',[StudentController::class, "store"]);
Route::get('/students/{student}',[StudentController::class, "show"]);
Route::put('/students/{student}',[StudentController::class, "update"]);
Route::delete('/students/{student}',[StudentController::class, "delete"]);