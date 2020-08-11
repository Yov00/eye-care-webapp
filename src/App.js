import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './components/pages/lading/LandingPage';
import DownloadPage from './components/pages/downloads/DownloadPage';
import Navbar from './components/elements/navbar/Navbar.js';
import Footer from './components/elements/footer/Footer';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse:""
    }
  }

  ampFXScript(){
  
    // document.querySelector('.footer').setAttribute('amp-fx','float-in-bottom');
 

    const script = document.createElement('script');
    script.src = 'https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js';
    script.async = true;

    document.body.appendChild(script);

  }

  componentDidMount(){
    this.ampFXScript();
  }

  render(){
    return(
      <Router>
        <div className="root">
          <div className="root-navbar">
            <Navbar/>
          </div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/downloads" component={DownloadPage}/>
        </Switch>
          <div className="root-footer">
            <Footer />
          </div>
        </div>
    </Router>
    )
  }
}


export default App;
