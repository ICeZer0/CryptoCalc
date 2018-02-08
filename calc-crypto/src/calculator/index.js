import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CalculatorFrom from './view';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import {mapCoin} from '../utils/responseHelper';
import PropTypes from "prop-types";
import {coinSelector} from '../selectors/index';

let fiat = [
  "AUD", "BRL", "CAD", "CHF", 
  "CLP", "CNY", "CZK", "DKK", 
  "EUR", "GBP", "HKD", "HUF", 
  "IDR", "ILS", "INR", "JPY", 
  "KRW", "MXN", "MYR", "NOK", 
  "NZD", "PHP", "PKR", "PLN", 
  "RUB", "SEK", "SGD", "THB", 
  "TRY", "TWD", "ZAR", "USD"
]

class Calculator extends Component {
  static propTypes = {
    coinMapToProps: PropTypes.array,
    fiatCurrency: PropTypes.array
  }
  state = {
    coinMapToProps: this.props.coinMapToProps ? this.props.coinMapToProps : [],
    fiatCurrency: fiat
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.coinMapToProps !== this.props.coinMapToProps){
      this.setState({
        coinMapToProps: nextProps.coinMapToProps
      })
    }
  }


  render() {
    const {coinMapToProps} = this.state;

    return (
      <div className="App">
        <p className="App-intro">
          Cryptocurrency Calculator Converter
        </p>         
        <CalculatorFrom handleClick={this.props.loadCoin} coin={this.props.coinMapToProps} fiat={this.fiat}/>
      </div>
    );
  }
}


const mapStateToProps=(state)=>{
  return {
    coinMapToProps: coinSelector(state),
  }
};

export default connect (mapStateToProps, actionCreators)(Calculator);
