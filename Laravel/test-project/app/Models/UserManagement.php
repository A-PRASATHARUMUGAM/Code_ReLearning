<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserManagement extends Model
{
     public $fillable=[
        "firstname",
        "lastname",
        "age",
        "email",
        "phone"
     ];
}
