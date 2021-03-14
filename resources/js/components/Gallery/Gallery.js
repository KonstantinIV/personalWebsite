import React from 'react';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      images: this.props.images,
      isImageClicked : false,
      imageFilename : "",
      altInfo : ""
    };


  }
    importAll(r) {
        return r.keys().map(r);
    }
  getImageFileNames(){

let imagefiles = this.importAll(require.context('../../../../public/images/',  false));
return imagefiles;
  }

  imageIsClicked(imageFilename,altInfo){
     this.setState({
         isImageClicked : !this.state.isImageClicked,
         imageFilename : imageFilename,
         altInfo : altInfo
          
        })
  }

  render() {
     
    return (

      <div className="konst-gallery">
      { this.getImageFileNames().map((element,key) => (
          <Image key={key} image={element.default} alt={key} onClick={() =>this.imageIsClicked(element.default,key)}/>   
))}
{this.state.isImageClicked ? <ImageViewer imageFilename={this.state.imageFilename} altInfo={this.state.altInfo} /> :" "}
      </div>

    );
  }
}

class Image extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      image: this.props.image
    };


  }

  render() {
    
    return (

      <div className="konst-gallery-image">
            <img src={this.state.image} alt={this.props.alt}/>
      </div>

    );
  }

}
  
class ImageViewer extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      imageFilename: this.props.imageFilename
    };


  }

  render() {
    
    return (

      <div className="konst-gallery-imageViewer">
            <img src={this.state.image} alt={this.props.alt}/>
      </div>

    );
  }

}