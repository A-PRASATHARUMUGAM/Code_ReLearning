<?php

namespace App\Http\Controllers;

use App\Models\UserManagement as ModelsUserManagement;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class UserManagement extends Controller
{

  public function index()
  {

    $userdate = ModelsUserManagement::all();

    return response()->json($userdate, 200);
  }


  public function store(Request $request)
  {

    $validated = $request->validate([
      "firstname" => "required|string",
      "lastname" => "required|string",
      "age" => "required|string",
      "email" => "required|string|email|unique:user_management,email",
      "phone" => "required|string"
    ]);

    $result = ModelsUserManagement::create($validated);

    return response()->json($result,201);
  }
}
