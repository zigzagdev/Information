<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\BoardResource;
use App\Models\Board;

class BoardController extends Controller
{
    public function getBoards()
    {
        return BoardResource::collection(Board::all());
    }
}
