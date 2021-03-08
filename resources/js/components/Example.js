import React from 'react';
import ReactDOM from 'react-dom';


export default class Example extends React.Component {
  constructor(props) {
    super(props);
 

    this.state = {
      username: "",
    };
  

  }

  render() {
    return (
        <div>
          <div className="konst-body-wrapper">
             <div className="konst-body-shape"></div>
             <div className="konst-body-shape-background"></div>
             <div className="konst-body-shape-circle"></div>
             <img className="konst-orange-bird" src="images/birdoranges.svg" alt="bird"  />
             <img className="konst-orange-bird konst-orange-bird-smooth" src="images/smoothbird.svg" alt="bird"  />
             <div className="konst-navbar">
                
              <div className="konst-navbar-container"> 
                  <div className="konst-navbar-container-tab konst-navbar-container-tab-mix-blend-mode"> 

                      kK
                  </div>   
                  <div className="konst-navbar-container-tab konst-navbar-container-tab-mix-blend-mode"> 
                      kK
                  </div> 
                  <div className="konst-navbar-container-tab"> 
                      kK
                  </div> 
                  <div className="konst-navbar-container-tab"> 
                      kK
                  </div> 
              </div>     
              <div className="konst-navbar-container-front"> 
                  <div className="konst-navbar-container-tab-front"> 
kK
                  </div>   
                  <div className="konst-navbar-container-tab-front "> 
                      kK
                  </div> 
                  <div className="konst-navbar-container-tab-front"> 
                      kK
                  </div> 
                  <div className="konst-navbar-container-tab-front"> 
                      kK
                  </div> 
              </div> 
             
          </div>
          <div className="konst-header">
              Konstantin Maier
          </div>
          <div className="konst-content">
                <div className="konst-content-container">
                    <div className="konst-content-container-post-container">

                </div>
                <div className="konst-content-container-post-container">

                </div>
            </div>
          </div>
          </div>
         

 



        </div>
    );
  }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
