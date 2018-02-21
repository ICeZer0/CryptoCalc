import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CalculatorForm from './view';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import PropTypes from "prop-types";
import {coinSelector, rowInitialize} from '../selectors/index';
import TypeAheadBox from '../common/button/type-ahead-box';

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
  constructor(props){
    super(props);
    this.state = {
      rows: this.props.rows,
      coinMapToProps: this.props.coinMapToProps,
      fiatCurrency : fiat
    }
  }

  static propTypes = {
    rows: PropTypes.array,
    coinMapToProps: PropTypes.array,
    fiatCurrency: PropTypes.array
  }

  componentDidMount(mount) {
    this.props.loadCoin() 
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.coinMapToProps !== this.props.coinMapToProps){
      this.setState({
        coinMapToProps: nextProps.coinMapToProps
      })
    }
    if(nextProps.fiatCurrency !== this.props.fiatCurrency){
      this.setState({
        fiatCurrency: nextProps.fiatCurrency
      })
    }
  }

   addRow = (e) => {
    var rows = this.state.rows;
    rows.push('new row')
    this.setState({rows : rows})
  }

  deleteRow = (e) => {
    var rows = this.state.rows;
    rows.pop('new row')
    this.setState({rows: rows})
  }

  render() {
    const {coinMapToProps} = this.state;
    const {fiatCurrency} = this.state;
    const {rows} = this.state;

    return (
      <div className="App">
        <p className="App-intro">
          Cryptocurrency Calculator Converter
        </p>
          <Button onClick={this.addRow.bind(this)}>ADD</Button>
          <Button onClick={this.deleteRow.bind(this)}>DELETE</Button>
          <TypeAheadBox coins={coinMapToProps} />
          <div className="card-row">
            <table className="table-container">
              <tbody>
                <CalculatorForm coin={coinMapToProps} fiat={fiatCurrency}/> 
                {rows.map((r, index) => (
                  <tr key={index}>
                    <td>
                      <CalculatorForm coin={coinMapToProps} fiat={fiatCurrency}/> 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>      
      </div>
    );
  }
}


const mapStateToProps=(state)=>{
  return {
    rows: rowInitialize(state),
    loadCoin: state.loadCoin,
    coinMapToProps: coinSelector(state),
    fiatCurrency: state.fiatCurrency
  }
};

export default connect (mapStateToProps, actionCreators)(Calculator);
