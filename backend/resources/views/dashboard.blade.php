@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
    <x-bread-crumb>
        <x-bread-crumb-link is-current="1">
            Dashboard
        </x-bread-crumb-link>
    </x-bread-crumb>
    <div class="row d-flex justify-content-center mb-2">
        <div class="card">
            <div class="card-header shadow rounded bg-primary">
                <h3 class="card-title text-white">
                    <span><i class="fa fa-users"></i></span>
                    <span>Total Orders</span>
                    <span class="badge badge-light"> 11 </span>
                </h3>

            </div>
        </div>

        <div class="card" id="">
            <div class="card-header shadow rounded bg-info">
                <h3 class="card-title text-white">
                    <span><i class="fa fa-users"></i></span>
                    <span>Total Perfumes</span>
                    <span class="badge badge-light"> 11 </span>
                </h3>
            </div>
        </div>

        <div class="card" id="">
            <div class="card-header shadow rounded bg-success">
                <h3 class="card-title text-white">
                    <span><i class="fa fa-users"></i></span>
                    <span>Total Users</span>
                    <span class="badge badge-light"> 11 </span>
                </h3>
            </div>
        </div>
    </div>
@endsection
