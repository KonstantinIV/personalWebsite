import React from 'react';



export default class FirstContent extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    };


  }

  render() {
    return (

      <div className="konst-content">
        <div className="konst-content-container">
          <div className="konst-content-container-post-container">
            <img className="konst-profile-picture" src="images/profile.png" alt="profile"/>
                
            
            <div className="konst-profile-text">
              Lorem Ipsum 
              is simply dummy 
              text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged.

                </div>

          </div>
          <div className="konst-content-container-post-container">

          </div>
        </div>
      </div>

    );
  }
}



