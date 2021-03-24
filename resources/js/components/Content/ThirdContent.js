import React from 'react';
import GalleryVideo from '../GalleryVideo/GalleryVideo';



export default class ThirdContent extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    };


  }

  render() {
    return (

      <div className="konst-content">
                                                        <div className="konst-body-purple-shape konst-body-purple-shape-bottom"></div>

        <div className="konst-content-container">
          
        <GalleryVideo />

        </div>
      </div>

    );
  }
}

