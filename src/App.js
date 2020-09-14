import React, {Component} from 'react';
import BikeMap from './components/BikeMap.js'
import NavBar from './components/NavBar.js'
import { Button } from 'react-bootstrap';
import './App.css';
import LogoAndTitle from './components/LogoAndTitle.js';

class App extends Component {

  render() {
    return (
      <div style={{backgroundColor:"#007C4F"}}>
        <NavBar />
        <LogoAndTitle />
        <BikeMap />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
      </div>
    
      )
  }
}

export default App;
