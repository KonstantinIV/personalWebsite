<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageGallery extends Controller


{
    private $filenames =[];
    //
    public function __construct() {
        foreach(glob('/var/www/html/personalWebsite/public/images/*.*') as $filename){
            array_push($this->filenames, basename($filename) );

        }
        
     }
     public function getImageFilenames() {
        

       // return view('custom/welcome')->with("data" , $this->filenames);
        return json_encode($this->filenames);
     }
}
