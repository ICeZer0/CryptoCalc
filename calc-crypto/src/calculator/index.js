import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CalculatorForm from '../calculatorForm/index';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import PropTypes from "prop-types";
import {coinSelector, rowInitialize} from '../selectors/index';
import {fiatTypes} from "../common/objects"

class Calculator extends Component {
  constructor(props){
    super(props);
    this.handleSelectedCoin = this.handleSelectedCoin.bind(this);
    this.handleSelectedFiat = this.handleSelectedFiat.bind(this);
    this.state = {
      rows: this.props.rows,
      coinMapToProps: this.props.coinMapToProps,
      fiatCurrency : fiatTypes,
      selectedCoin: {},
      selectedFiat: {}
    }
  }

  static propTypes = {
    rows: PropTypes.array,
    coinMapToProps: PropTypes.array,
    fiatCurrency: PropTypes.array
  }

  componentDidMount() {
    this.props.loadCoin();
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

  handleSelectedCoin = coin => {
    let coinFound = {}
    coinFound = this.props.coinMapToProps.find(function (obj) {
      if(obj.symbol === coin)
        return obj;
    });
    this.setState({
      selectedCoin: coinFound
    });
  console.log(this.state.selectedCoin)
}

handleSelectedFiat = coin => {
  let coinFound = {}
  coinFound = this.state.fiatCurrency.find(function (obj) {
    if(obj.symbol === coin)
      return obj;
  });
  this.setState({
    selectedFiat: coinFound
  });
console.log(this.state.selectedFiat)
}

  render() {
    const {coinMapToProps} = this.state;
    const {fiatCurrency} = this.state;
    const {rows} = this.state;
    const {selectedCoin} = this.state;
    const {selectedFiat} = this.state;

    return (
      <div className="App">
        <p className="App-intro">
          Cryptocurrency Calculator Converter
        </p>
          <Button className="fa fa-plus fa-2x" onClick={this.addRow.bind(this)} />
          <Button className="fa fa-trash fa-2x" onClick={this.deleteRow.bind(this)} />

          <div className="card-row">
            <table className="table-container">
              <tbody>
                <CalculatorForm 
                  coin={coinMapToProps} 
                  fiat={fiatCurrency} 
                  handleSelectedCoin={this.handleSelectedCoin}
                  handleSelectedFiat={this.handleSelectedFiat}
                  selectedCoin={selectedCoin}
                  selectedFiat={selectedFiat} /> 
                {rows.map((r, index) => (
                  <tr key={index}>
                    <td>
                      <CalculatorForm 
                        coin={coinMapToProps} 
                        fiat={fiatCurrency}                  
                        handleSelectedCoin={this.handleSelectedCoin}
                        handleSelectedFiat={this.handleSelectedFiat}
                        selectedCoin={selectedCoin}
                        selectedFiat={selectedFiat} /> 
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
    fiatCurrency: state.fiatCurrency, 
  }
};

export default connect (mapStateToProps, actionCreators)(Calculator);
