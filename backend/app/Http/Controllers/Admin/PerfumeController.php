<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Models\Perfume;
use Illuminate\Http\Request;

class PerfumeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index(Request $request)
    {
        $search = $request->get('search');

        return view('modules.perfumes.index')
            ->with([
                'perfumes' => Perfume::query()
                    ->when($search, fn ($query) => $query->where('name', 'like', "%".$search."%"))
                    ->simplePaginate(10)
            ]);
    }

    public function create()
    {
        return view('modules.perfumes.edit')
            ->with([
                'action' => route('perfumes.store'),
                'method' => null,
                'data' => null
            ]);
    }

    public function store(CategoryRequest $request)
    {
        $validated = $request->validated();
        $validated['active'] = $request->has('active');

        $category = Perfume::query()->create($validated);

        return redirect()
            ->route('perfumes.edit', $category)
            ->withNotify('success', $category->getAttribute('name'));
    }

    public function show(Perfume $perfume)
    {
        return view('modules.perfumes.edit')
            ->with([
                'action' => null,
                'method' => null,
                'data' => $perfume
            ]);
    }

    public function edit(Perfume $perfume)
    {
        return view('modules.perfumes.edit')
            ->with([
                'action' => route('perfumes.update', $perfume),
                'method' => "PUT",
                'data' => $perfume
            ]);
    }

    public function update(CategoryRequest $request, Perfume $perfume)
    {
        $validated = $request->validated();
        $validated['active'] = $request->has('active');

        $perfume->update($validated);

        return back()->withNotify('info', $perfume->getAttribute('name'));
    }

    public function destroy(Perfume $perfume)
    {
        if ($perfume->delete()) {
            return response('OK');
        }
        return response()->setStatusCode('204');
    }
}
