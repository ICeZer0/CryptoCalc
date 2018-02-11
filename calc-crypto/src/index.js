import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './styles/logo.svg';
import './styles/App.css';
import Calculator from './calculator/index';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/coinReducer';



let store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to CryptCalc</h1>
          </header>
          <div className="main-container">
            <Calculator/>
          </div>
        </div>
      );
    }
  }

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
