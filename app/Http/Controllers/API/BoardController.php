<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\Board;
use App\Http\Controllers\Controller;
use App\Http\Requests\BoardRequest;

class BoardController extends Controller
{
    public function index()
    {
        $boards = Board::all();
        return $boards;
    }

    public function store(Request $request)
    {

        $request->validate([
            'title' => 'max:100',
            'name' => 'required|max:30|regex:/^[0-9a-zA-Z]+$/',
            'description' => 'max:200'
        ]);

        $board = new Board;
        $board->title = $request->title;
        $board->name = $request->name;
        $board->description = $request->description;
        $board->save();
        return response()->json(['message'=> 'Post was created successfully !'],['data'=>Board::all()],201);
    }

    public function show($id)
    {
        $board = Board::find($id);
        return $board ;
    }
    public function update(Request $request,$id)
    {
        $board = Board::find($id);
        $board->title = $request->title;
        $board->name = $request->name;
        $board->description = $request->description;
        $board->save();
        return response()->json(['message'=> 'Post was updated successfully !'],201);
    }
    public function destroy($id)
    {
       $board = Board::find($id);
       $board->delete();
       return response()->json(['message'=> 'Post was deleted successfully !'],201);
    }

}
