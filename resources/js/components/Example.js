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
             <div className="konst-body-shape">

            
            </div>

          </div>
          <div className="konst-header">
              Konstantin Maier
          </div>

          <div className="konst-navbar">
              <div className="konst-navbar-container"> 
                  <div className="konst-navbar-container-tab"> 
                      kK
                  </div>   
                  <div className="konst-navbar-container-tab"> 
                      kK
                  </div> 
                  <div className="konst-navbar-container-tab"> 
                      kK
                  </div> 
                  <div className="konst-navbar-container-tab"> 
                      kK
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
