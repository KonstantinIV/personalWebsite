<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageGallery extends Controller


{
    public $filenames =[];
    //
    public function __construct() {
        foreach(glob('/var/www/html/personalWebsite/public/images/*.*') as $filename){
            array_push($this->filenames, $filename);

        }
        
     }
     public function show() {
         print_r($this->filenames );
        // print_r("Asdsad");

        return view('custom/welcome')->with("name" , $this->filenames);

     }
}
