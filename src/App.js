import React, { Component } from 'react';
import { Element } from 'react-scroll';
import logo from './logo.svg';
import './App.css';

// components
import Navbar from './components/Navbar';
import Info from './components/info';
import Media from './components/media';
import Location from './components/locations';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Portland's very own Node.js usergroup</p>
          <p>
            <a href="https://www.meetup.com/pdxnode"><img alt="meetup" src="https://img.shields.io/badge/meetup-view%20events%20%E2%86%92-red.svg" /></a>
            <a href="https://github.com/pdxnode"><img alt="github" src="https://img.shields.io/badge/github-code%20with%20us%20%E2%86%92-orange.svg" /></a>
            <a href="https://twitter.com/pdxnode"><img alt="twitter" src="https://img.shields.io/badge/twitter-follow%20us%20%E2%86%92-blue.svg" /></a>
            <a href="https://gitter.im/pdxnode/Lobby"><img alt="gitter" src="https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg" /></a>
          </p>
        </header>
        
        <Element name="featured">
        </Element>
        
        <Element name="info">
          <Info />
        </Element>
        
        <Element name="media">
          <Media />
        </Element>
        
        <Element name="locations">
          <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;
