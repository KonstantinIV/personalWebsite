import React from 'react';
import Gallery from '../Gallery/Gallery'
import PropTypes from 'prop-types';

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
        <div className="konst-content-container">
                <Gallery />
         

        </div>
      </div>

    );
  }
}
