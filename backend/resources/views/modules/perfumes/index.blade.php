@extends('layouts.app')

@section('title', 'Perfumes')

@section('content')
    <x-bread-crumb>
        <x-bread-crumb-link :link="route('dashboard')">
            Dashboard
        </x-bread-crumb-link>
        <x-bread-crumb-link>
            Perfumes
        </x-bread-crumb-link>
    </x-bread-crumb>
    <form action="{{route('perfumes.index')}}">
        <div class="row d-flex justify-content-between mb-2">
            <div class="col-6">
                <div class="input-group mb-3">
                    <input type="search" name="search" value="{{request()->get('search')}}" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="submit"><i class="fal fa-search"></i></button>
                        <a class="btn btn-outline-danger" href="{{route('perfumes.index')}}"><i class="fal fa-times"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <a class="btn btn-outline-success float-right" href="{{route('perfumes.create')}}">Create</a>
            </div>
            <div class="col-12">
                <table class="table table-responsive-sm table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Icon</th>
                        <th scope="col">Icon type</th>
                        <th scope="col">Active</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    @forelse($perfumes as $perfume)
                        <tr>
                            <th scope="row">{{$loop->iteration}}</th>
                            <td>{{$perfume->getAttribute('name')}}</td>
                            <td>{{$perfume->getAttribute('icon')}}</td>
                            <td>{{$perfume->getAttribute('icon_type')}}</td>
                            <td>
                                {!! $perfume->getAttribute('active') ?
                                    '<i class="fas fa-check-circle text-success" style="font-size:18px"></i>':
                                    '<i class="fas fa-times-circle text-danger"  style="font-size:18px"></i>'
                                !!}
                            </td>
                            <td>
                                <div class="btn-sm-group">
                                    <a href="{{route('perfumes.show', $perfume)}}" class="btn btn-sm btn-outline-primary">
                                        <i class="fal fa-eye"></i>
                                    </a>
                                    <a href="{{route('perfumes.edit', $perfume)}}" class="btn btn-sm btn-outline-success">
                                        <i class="fal fa-pen"></i>
                                    </a>
                                    <a href="{{route('perfumes.destroy', $perfume)}}" delete data-name="{{$perfume->getAttribute('name')}}" class="btn btn-sm btn-outline-danger" >
                                        <i class="fal fa-trash"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <th colspan="5">
                                <div class="row justify-content-center m-3">
                                    <div class="col-7 alert alert-danger text-center" role="alert">Empty for now</div>
                                </div>
                            </th>
                        </tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
            <div class="col-6">
                <div class="float-right">
                    {{$perfumes->links()}}
                </div>
            </div>
        </div>
    </form>
@endsection
