import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './components/pages/lading/LandingPage';
import DownloadPage from './components/pages/downloads/DownloadPage';
import Navbar from './components/elements/navbar/Navbar.js';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse:""
    }
  }

  callAPI(){
    fetch("http://localhost:3041/testApi")
      .then(res=>res.text())
      .then(res=>this.setState({apiResponse:res}))
      .catch(err=>console.log(err))
  }

  componentDidMount(){
    this.callAPI();
  }

  render(){
    return(
      <Router>
        <div className="root">
          <div className="navbar">
            <Navbar/>
          </div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/downloads" component={DownloadPage}/>
        </Switch>
       
        </div>
    </Router>
    )
  }
}


export default App;
