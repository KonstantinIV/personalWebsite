import React from 'react';
export default class GalleryWebsite extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      websites: this.props.websites,
      iswebsiteClicked : false,
      websiteFilename : "",
      altInfo : "" ,
      websiteFilenames: []
    };

    this.openwebsiteViewer = this.openwebsiteViewer.bind(this);
    this.closewebsiteViewer = this.closewebsiteViewer.bind(this);

  }
    
  openwebsiteViewer(websiteFilename,altInfo){ 
    console.log(websiteFilename);
     this.setState({
         iswebsiteClicked : !this.state.iswebsiteClicked,
         websiteFilename : websiteFilename,
         altInfo : altInfo
          
        })
  } 
  closewebsiteViewer(){
   
     this.setState({
         iswebsiteClicked : !this.state.iswebsiteClicked,
         websiteFilename : "",
         altInfo : ""
          
        })
  } 
  componentDidMount() {
    var request = new XMLHttpRequest();
  
    request.open("GET","/websiteGallery", true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    request.send();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        console.log(request.response);
        this.setState({
          websiteFilenames: JSON.parse(request.response)
        })
       
      }
    }.bind(this);

  }
  render() {
     
    return (

      <div className="konst-gallery-website">
      { this.state.websiteFilenames.map((element,key) => (
          <Website key={key} website={element} alt={key} onClick={() =>this.openwebsiteViewer(element,key)}/>   
      ))}

<div className="konst-gallery-website-placeholder"><div></div></div>
<div className="konst-gallery-website-placeholder"><div></div></div> 
<div className="konst-gallery-website-placeholder"><div></div></div>
<div className="konst-gallery-website-placeholder"><div></div></div>
{this.state.iswebsiteClicked ? 
<WebsiteViewer 
  websiteFilename={this.state.websiteFilename} 
  altInfo={this.state.altInfo} 
  onClick={() =>this.closewebsiteViewer()}/> :" "}
      </div>

    );
  }
}

class Website extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      website: this.props.website
    };


  }

  render() {
    
    return (
<div className="konst-gallery-website-container">
      <div className="konst-gallery-website-website">

    
             </div>
      </div>

    );
  }

}
  
class WebsiteViewer extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      websiteFilename: this.props.websiteFilename
    };


  }

  render() {
     
    return (

      <div className="konst-gallery-websiteViewer" onClick={this.props.onClick}>
      
            <img src={"websites/" + this.state.websiteFilename} alt={this.props.alt}/>
      </div>

    );  
  } 
 
} 