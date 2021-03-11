import React from 'react';
import Link from 'react-router-dom/Link';



export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
 

    this.state = {
      theme : this.props.theme
    };
  

  }
  getThemeClassName(){
    let themeName = this.state.theme;
    return "konst-navbar-container-tab-" + themeName;
  }
  getThemeClassNameFront(){
    let themeName = this.state.theme;
    return "konst-navbar-container-tab-front-" + themeName;
  }

  render() {
    return (
        
     <div className="konst-navbar">
                
              <div className="konst-navbar-container"> 
                  <div 
                  className={
                  "konst-navbar-container-tab " +
                  this.getThemeClassName() +
                  " konst-navbar-container-tab-mix-blend-mode"
                  
                  }>       
            
                  </div>   
                  <div 
                  className={
                    "konst-navbar-container-tab " +
                    this.getThemeClassName() +
                    " konst-navbar-container-tab-mix-blend-mode"
                    
                    }> 
                      
                  </div> 
                  <div className={
                  "konst-navbar-container-tab " +
                  this.getThemeClassName()
                  
                  }> 
                      
                  </div> 
                  <div className={
                  "konst-navbar-container-tab " +
                  this.getThemeClassName()
                  
                  }> 
                      
                  </div> 
              </div>     
              <div className="konst-navbar-container-front"> 
                  <div className={
                  "konst-navbar-container-tab-front " +
                  this.getThemeClassNameFront()
                  
                  }>
                  <Link to="/first">First</Link>

                  </div>   
                  <div className={
                  "konst-navbar-container-tab-front " +
                  this.getThemeClassNameFront()
                  
                  }> 
                  <Link to="/second">Second</Link>

                  </div> 
                  <div className={
                  "konst-navbar-container-tab-front " +
                  this.getThemeClassNameFront()
                  
                  }> 
                  <Link to="/second">Second</Link>

                  </div> 
                  <div className={
                  "konst-navbar-container-tab-front " +
                  this.getThemeClassNameFront()
                  
                  }> 
                  <Link to="/second">Second</Link>

                  </div> 
              </div> 
             
          </div>
          
    );
  }
}



