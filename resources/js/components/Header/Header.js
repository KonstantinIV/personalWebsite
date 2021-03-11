import React from 'react';



export default class Header extends React.Component {
  constructor(props) {
    super(props);
 

    this.state = {
      theme : this.props.theme
    };
  

  }
  getClassName(){
    let themeName = this.state.theme;
    return "konst-header-"+themeName;
  }

  render() {
    return (
        
        <div className={"konst-header " +this.getClassName()}>
        Konstantin Maier
    </div>
          
    );
  }
}



