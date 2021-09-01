<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\Board;
use App\Http\Controllers\Controller;

class BoardController extends Controller
{
    public function index()
    {
        $boards = Board::all();
        return $boards;
    }

    public function store(Request $request)
    {

        $board = new Board;
        $board->title = $request->title;
        $board->name = $request->name;
        $board->description = $request->description;
        $board->save();
        return redirect('api/boards');
    }
}
