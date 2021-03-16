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

    this.openImageViewer = this.openImageViewer.bind(this);
    this.closeImageViewer = this.closeImageViewer.bind(this);

  }
    importAll(r) {
        return r.keys().map(r);
    }
  getImageFileNames(){

let imagefiles = this.importAll(require.context('../../../../public/images/gallery/',  false)); 
return imagefiles;
  }

  openImageViewer(imageFilename,altInfo){ 
    console.log(imageFilename);
     this.setState({
         isImageClicked : !this.state.isImageClicked,
         imageFilename : imageFilename,
         altInfo : altInfo
          
        })
  } 
  closeImageViewer(){
   
     this.setState({
         isImageClicked : !this.state.isImageClicked,
         imageFilename : "",
         altInfo : ""
          
        })
  } 

  render() {
     
    return (

      <div className="konst-gallery">
      { this.getImageFileNames().map((element,key) => (
          <Image key={key} image={element.default} alt={key} onClick={() =>this.openImageViewer(element.default,key)}/>   
))}
<div className="konst-gallery-image-placeholder"><div></div></div>
<div className="konst-gallery-image-placeholder"><div></div></div>
<div className="konst-gallery-image-placeholder"><div></div></div>
<div className="konst-gallery-image-placeholder"><div></div></div>
{this.state.isImageClicked ? 
<ImageViewer 
  imageFilename={this.state.imageFilename} 
  altInfo={this.state.altInfo} 
  onClick={() =>this.closeImageViewer()}/> :" "}
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
<div className="konst-gallery-image-container">
      <div className="konst-gallery-image">

            <img src={this.state.image} alt={this.props.alt} onClick={this.props.onClick}/>
      </div>
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

      <div className="konst-gallery-imageViewer" onClick={this.props.onClick}>
      
            <img src={this.state.imageFilename} alt={this.props.alt}/>
      </div>

    );  
  } 
 
} 