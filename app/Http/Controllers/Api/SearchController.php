<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Department;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
    //
    public function employees_search(Request $request){
        $search = $request->get("search");
        $result=User::where("uid","like",$search."%")->paginate(10);
        return response($result);
    }


    public function departments_search(Request $request){
        $search = $request->get("search");
        $result=Department::where("name","like",$search."%")->paginate(10);
        return response($result);
    }
}
