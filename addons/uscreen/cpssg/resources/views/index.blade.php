@extends('statamic::layout')

@section('content')
    <div class="flex items-center mb-3">
        <h1 class="flex-1">Server Side Generation</h1>
    </div>
    <ssgenerator name="CPSSG"></ssgenerator>
@stop
