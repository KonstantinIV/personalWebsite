import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';

import NavigationBar from './NavigationBar/NavigationBar';
import Header from './Header/Header';
import FirstContent from './Content/FirstContent';
import SecondContent from './Content/SecondContent';
import ThirdContent from './Content/ThirdContent';


export default class Example extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            username: "",
        };


    }

    render() {
        return (

            <Router>
                <div>


                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                   
                    <Switch>
                        <Route  path="/first" render={(props) => (
                            <div key="2" className="konst-body-blue-wrapper">
                                <div className="konst-body-blue-shape"></div>
                                <div className="konst-body-blue-shape-background"></div>
                                <img className="konst-orange-bird" src="images/birdoranges.svg" alt="bird" />
                                <img className="konst-orange-bird konst-orange-bird-smooth" src="images/smoothbird.svg" alt="bird" />

                                <NavigationBar theme="blue"/>
                                <Header theme="blue"/>
                                <FirstContent />

                            </div>
                        )}>

                        </Route>
                    </Switch>
                    <Switch>
                        <Route  path="/second" render={(props) => (
                            
                            <div key="3" className="konst-body-green-wrapper">
                                <div className="konst-body-green-shape"></div>
                                <div className="konst-body-green-shape-background"></div>
                                <img className="konst-orange-bird" src="images/birdoranges.svg" alt="bird" />
                                <img className="konst-orange-bird konst-orange-bird-smooth" src="images/smoothbird.svg" alt="bird" />

                                <NavigationBar theme="green"/>
                                <Header theme="green"/>
                                <SecondContent />

                            </div>
                            
                        )}>

                        </Route>
                    </Switch>
                    <Switch>
                        <Route  path="/third" render={(props) => (
                            
                            <div key="4" className="konst-body-purple-wrapper">
                                <div className="konst-body-purple-shape"></div>
                                <div className="konst-purple-container">
                                <div className="konst-body-purple-shape-background"></div>
                                <div className="konst-body-purple-shape-background-2"></div>
                                </div> 
                                <img className="konst-orange-bird" src="images/birdoranges.svg" alt="bird" />
                                <img className="konst-orange-bird konst-orange-bird-smooth" src="images/smoothbird.svg" alt="bird" />

                                <NavigationBar theme="purple"/>
                                <Header theme="purple"/>
                                <ThirdContent />

                            </div>
                            
                        )}>

                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }
}



    ReactDOM.render(<Example />, document.getElementById('example'));

