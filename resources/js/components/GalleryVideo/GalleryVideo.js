import React from 'react';

export default class GalleryVideo extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      videos: this.props.videos,
      isvideoClicked : false,
      videoFilename : "",
      altInfo : "" 
    };

    this.openvideoViewer = this.openvideoViewer.bind(this);
    this.closevideoViewer = this.closevideoViewer.bind(this);

  }
    importAll(r) {
        return r.keys().map(r);
    }
  getvideoFileNames(){

let videofiles = this.importAll(require.context('../../../../public/images/galleryVideos/',  false));   
console.log(videofiles);
return videofiles;
  }

  openvideoViewer(videoFilename,altInfo){ 
    console.log(videoFilename);
     this.setState({
         isvideoClicked : !this.state.isvideoClicked,
         videoFilename : videoFilename,
         altInfo : altInfo
          
        })
  } 
  closevideoViewer(){
   
     this.setState({
         isvideoClicked : !this.state.isvideoClicked,
         videoFilename : "",
         altInfo : ""
          
        })
  } 

  render() {
     
    return (

      <div className="konst-gallery-video">
      { this.getvideoFileNames().map((element,key) => (
          <Video key={key} video={element.default} alt={key} onClick={() =>this.openvideoViewer(element.default,key)}/>   
))}
<div className="konst-gallery-video-placeholder"><div></div></div>
<div className="konst-gallery-video-placeholder"><div></div></div> 
<div className="konst-gallery-video-placeholder"><div></div></div>
<div className="konst-gallery-video-placeholder"><div></div></div>
{this.state.isvideoClicked ? 
<VideoViewer 
  videoFilename={this.state.videoFilename} 
  altInfo={this.state.altInfo} 
  onClick={() =>this.closevideoViewer()}/> :" "}
      </div>

    );
  }
}

class Video extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      video: this.props.video
    };


  }

  render() {
    
    return (
<div className="konst-gallery-video-container">
      <div className="konst-gallery-video">

            <img src={this.state.video} alt={this.props.alt} onClick={this.props.onClick}/>
      </div>
      </div>

    );
  }

}
  
class VideoViewer extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      videoFilename: this.props.videoFilename
    };


  }

  render() {
     
    return (

      <div className="konst-gallery-videoViewer" onClick={this.props.onClick}>
      
            <img src={this.state.videoFilename} alt={this.props.alt}/>
      </div>

    );  
  } 
 
} 