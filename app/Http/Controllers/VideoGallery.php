<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VideoGallery extends Controller
{
    private $filenames =[];
    //
    public function __construct() {
        foreach(glob('/var/www/html/personalWebsite/public/videos/*.*') as $filename){
            array_push($this->filenames, basename($filename) );

        }
        
     }
     public function getVideoFilenames() {
        
        return json_encode($this->filenames);

        //return view('custom/welcome')->with("data" , $this->filenames);

     }
}
