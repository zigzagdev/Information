<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    use HasFactory;

    protected  $fillable = ['title','name','description'];

    public function board()
    {
      return $this->hasMany(Comment::class);
    }

}
