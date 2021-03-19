<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageGallery;
use App\Http\Controllers\VideoGallery;

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

Route::get('/imageGallery',[ImageGallery::class, 'getImageFilenames']); 
Route::get('/videoGallery',[VideoGallery::class, 'getVideoFilenames']); 


//Route::get('/second',[ImageGallery::class, 'getImageFilenames']); 
//Route::get('/third',[VideoGallery::class, 'getVideoFilenames']); 
/*Route::get('/',function(){
    return view('custom/welcome');
});*/
Route::get('/{route?}',function(){
    return view('custom/welcome');
});
/*oute::view('/{path?}', 'custom/welcome')
     ->where('path', '.*')
     ->name('react');*/

     