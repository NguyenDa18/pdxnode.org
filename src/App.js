import React, { Component } from 'react';
import { Element } from 'react-scroll';
import logo from './logo.svg';
import './App.css';

// components
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Portland's very own Node.js usergroup
          </p>
        </header>
      </div>
    );
  }
}

export default App;
