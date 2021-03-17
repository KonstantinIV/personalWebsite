<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageGallery;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('custom/welcome')->with("name" , "lll");
});
Route::get('/{route?}',function(){
    return view('custom/welcome')->with("name" , "lll");
});
*/


Route::get('/{route?}',[ImageGallery::class, 'show']); 
/*oute::view('/{path?}', 'custom/welcome')
     ->where('path', '.*')
     ->name('react');*/

     