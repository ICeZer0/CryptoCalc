import React, { Component } from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import Calculator from './calculator/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CryptCalc</h1>
        </header>
        <Calculator/>
      </div>
    );
  }
}

export default App;
