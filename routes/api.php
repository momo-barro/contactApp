<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List contacts 
Route::get('/contacts', 'ContactController@index');

// List single contact 
Route::get('/contact/{id}', 'ContactController@show');

// Create new contact 
Route::post('/contact', 'ContactController@store');

// Update contact 
Route::put('/contact', 'ContactController@store');

//Delete article
Route::delete('/contact/{id}', 'ContactController@destroy');