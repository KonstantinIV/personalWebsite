import React from 'react';
import ReactPlayer from 'react-player'
export default class GalleryVideo extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      videos: this.props.videos,
      isvideoClicked : false,
      videoFilename : "",
      altInfo : "" ,
      videoFilenames: []
    };

    this.openvideoViewer = this.openvideoViewer.bind(this);
    this.closevideoViewer = this.closevideoViewer.bind(this);

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
  componentDidMount() {
    var request = new XMLHttpRequest();
  
    request.open("GET","/videoGallery", true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    request.send();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        console.log(request.response);
        this.setState({
          videoFilenames: JSON.parse(request.response)
        })
       
      }
    }.bind(this);

  }
  render() {
     
    return (

      <div className="konst-gallery-video">
      { this.state.videoFilenames.map((element,key) => (
          <Video key={key} video={element} alt={key} onClick={() =>this.openvideoViewer(element,key)}/>   
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

      <ReactPlayer
            
            url= {"videos/" + this.props.video}
            width='100%'
            height='100%'
            controls = {true}

            />     
            
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
      
            <img src={"videos/" + this.state.videoFilename} alt={this.props.alt}/>
      </div>

    );  
  } 
 
} 