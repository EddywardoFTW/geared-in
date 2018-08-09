import React, { Component } from 'react';
import logo from './images/simple-gear-pixabay.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GearedIn!</h1>
        </header>
        <p className="App-intro">
          Coming soon...
        </p>
      </div>
    );
  }
}

export default App;
