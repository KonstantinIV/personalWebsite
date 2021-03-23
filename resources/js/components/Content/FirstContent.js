import React from 'react';



export default class FirstContent extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    };


  }

  render() {
    let imgStyle= {width:'50% ', height:'50%'};
    return (

      <div className="konst-content">
                                        <div className="konst-body-blue-shape konst-body-blue-shape-bottom"></div>

        <div className="konst-content-container">
          <div className="konst-content-container-post-container">
              <img className="konst-profile-picture" src="images/profile.png"  alt="profile"/>
            
                
            
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
                <div className="konst-service-mainheader">Services</div>
          </div> 
          <div className="konst-content-container-post-container konst-content-container-post-container-service">

                <div className="konst-service-container">
                  <div className="konst-service-header">
                    Front-end
                  </div>
                  <div className="konst-service-skill">
                <ul>
                  <li>React</li>
                  <li>JS / Jquery</li>
                  <li>SASS</li>
                  <li>Wordpress</li>
                  <li>Bootstrap</li>

                </ul>
                  </div>
                </div>
                <div className="konst-service-container">
                  <div className="konst-service-header">
                    Back-end
                  </div>
                  <div className="konst-service-skill">
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>SQL</li>
                  </div>
                </div>

          </div>

        </div>
      </div>

    );
  }
}



