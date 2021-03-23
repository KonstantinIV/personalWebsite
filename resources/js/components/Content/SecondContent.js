import React from 'react';
import Gallery from '../Gallery/Gallery'

export default class SecondContent extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      images: this.props.images
    };


  }
  

  render() {
    
    return (

      <div className="konst-content">
                                                <div className="konst-body-green-shape konst-body-green-shape-bottom"></div>

        <div className="konst-content-container">
                <Gallery />
         

        </div>
      </div>

    );
  }
}
