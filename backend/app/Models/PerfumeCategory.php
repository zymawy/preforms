<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PerfumeCategory extends \Illuminate\Database\Eloquent\Relations\Pivot
{
    use HasFactory;
    protected $table = 'perfume_categories';
}
