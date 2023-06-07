<?php

namespace App\Models;

use App\ModelFilters\CategoryFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class Category extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = ['name', 'icon', 'icon_type', 'active'];

    protected $casts = ['active' => 'boolean'];

    public function scopeIsActive($query)
    {
        return $query->where('active', 1);
    }


    public function modelFilter()
    {
        return $this->provideFilter(CategoryFilter::class);
    }
}
