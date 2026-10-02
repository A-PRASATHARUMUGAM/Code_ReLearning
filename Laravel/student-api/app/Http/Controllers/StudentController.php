<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // Get all Students 
    public function index()
    {

        $student = Student::all();

        return response()->json($student);
    }

    //Create 
    public function store(Request $request)
    {

        $validated = $request->validate([
            "name" => 'required|string|max:255',
            'email' => 'required|email|unique:students,email',
            'age' => 'required|integer|min:1',
            'course' => 'required|string|max:255',
        ]);

        $student = Student::create($validated);

        return response()->json($student, 201);
    }

    //Show 
    public function show(Student $student)
    {

        return response()->json($student);
    }

    //Update
    public function update(Request $request, Student $student)
    {

        $validated = $request->validate([
            "name" => 'required|string|max:255',
            'email' => 'required|email|unique:students,email' . $student->id,
            'age' => 'required|integer|min:1',
            'course' => 'required|string|max:255',

        ]);

        $student->update($validated);

        return response()->json($student);
    }


    public function delete(Student $student){

          $student->delete();

          return response()->json([
            "message"=>"Student Deleted Successfully "
          ]);
    }
}
