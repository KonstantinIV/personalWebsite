import React from 'react';
import Link from 'react-router-dom/Link';



export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
 

    this.state = {
      
    };
  

  }

  render() {
    return (
        
     <div className="konst-navbar">
                
              <div className="konst-navbar-container"> 
                  <div className="konst-navbar-container-tab konst-navbar-container-tab-mix-blend-mode">       
            
                  </div>   
                  <div className="konst-navbar-container-tab konst-navbar-container-tab-mix-blend-mode"> 
                      
                  </div> 
                  <div className="konst-navbar-container-tab"> 
                      
                  </div> 
                  <div className="konst-navbar-container-tab"> 
                      
                  </div> 
              </div>     
              <div className="konst-navbar-container-front"> 
                  <div className="konst-navbar-container-tab-front">
                  <Link to="/second">First</Link>

                  </div>   
                  <div className="konst-navbar-container-tab-front "> 
                  <Link to="/second">Second</Link>

                  </div> 
                  <div className="konst-navbar-container-tab-front"> 
                  <Link to="/second">Second</Link>

                  </div> 
                  <div className="konst-navbar-container-tab-front"> 
                  <Link to="/second">Second</Link>

                  </div> 
              </div> 
             
          </div>
          
    );
  }
}



