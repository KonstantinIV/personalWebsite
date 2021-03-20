import React from 'react';
import {Link} from 'react-router-dom';



export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
 
    
    this.state = {
      theme : this.props.theme 
    };

  }

  changeBodyBackground(){
    let theme = this.state.theme;
    if(theme === "blue"){
      document.body.style.backgroundColor = "#3636f9";

    }else if(theme === "green"){
      document.body.style.backgroundColor = "#57bd2c";

    }else if(theme === "purple"){
      document.body.style.backgroundColor = "#69007f";

    }else if(theme === "black"){
      document.body.style.backgroundColor = "#0e0e0e";

    }
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
    this.changeBodyBackground();

    return (
        
     <div className="konst-navbar">
                
              <div className="konst-navbar-container"> 
                  <div 
                  className={
                  "konst-navbar-container-tab " +
                  "konst-navbar-container-tab-mix-blend-mode " +
                  this.getThemeClassName() 
                  
                  
                  }>       
            
                  </div>   
                  <div 
                  className={
                    "konst-navbar-container-tab " +
                    "konst-navbar-container-tab-mix-blend-mode " +
                    this.getThemeClassName() 
                    
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
                  <Link to="/third">Third</Link>

                  </div> 
                  <div className={
                  "konst-navbar-container-tab-front " +
                  this.getThemeClassNameFront()
                  
                  }> 
                  <Link to="/Fourth">Fourth</Link>

                  </div> 
              </div> 
             
          </div>
          
    );
  }
}



