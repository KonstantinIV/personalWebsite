import React from 'react';
import GalleryWebsite from '../GalleryWebsite/GalleryWebsite';



export default class FourthContent extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    };


  }

  render() {
    return (

      <div className="konst-content">
        <div className="konst-content-container">
             <GalleryWebsite />
         
        </div>
      </div> 

    );
  }
}



