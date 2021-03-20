<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebsiteGallery extends Controller


{
    private $filenames =[];
    //
    public function __construct() {
        foreach(glob('/var/www/html/personalWebsite/public/websites/*.*') as $filename){
            array_push($this->filenames, basename($filename) );

        }
        
     }
     public function getWebsiteFilenames() {
        

       // return view('custom/welcome')->with("data" , $this->filenames);
        return json_encode($this->filenames);
     }
}
