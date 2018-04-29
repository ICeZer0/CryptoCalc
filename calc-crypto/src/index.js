import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './styles/logo.svg';
import Calculator from './calculator/index';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import './styles/App.css';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const initialState = {};
const store = configureStore(initialState);

class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to CryptCalc</h1>
          </header>
          <div className="main-container">
            <Calculator />
          </div>
        </div>
      );
    }
  }

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
