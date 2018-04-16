import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CalculatorForm from '../calculatorForm/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as coinActions from '../actions/coinActions';
import PropTypes from "prop-types";
import * as selector from '../selectors/index';
import {fiatTypes} from "../common/fiatObjects";


class Calculator extends Component {
  static propTypes = {
    coinActions: PropTypes.object,
    rows: PropTypes.array,
    coinMapToProps: PropTypes.array,
    fiatCurrency: PropTypes.array,
    cryptoCoins: PropTypes.array,
    selectedCoin: PropTypes.object,
    selectedFiat: PropTypes.object,
    mappedCoinTypes: PropTypes.object
  }

  constructor(props){
    super(props);

    this.state = {
      rows: this.props.rows,
      cryptoCoins: this.props.cryptoCoins,
      fiatCurrency : this.props.fiatCurrency,
      selectedCoin: this.props.selectedCoin,
      selectedFiat: this.props.selectedFiat,
    }
    this.mapCoinSymbols = this.mapCoinSymbols.bind(this);
    this.handleSelectedCoin = this.handleSelectedCoin.bind(this);
    this.handleSelectedFiat = this.handleSelectedFiat.bind(this);
    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  componentDidMount(){
    this.props.coinActions.getCoinDataStart(); 
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.cryptoCoins !== this.props.cryptoCoins){
      this.setState({
        cryptoCoins: nextProps.cryptoCoins
      })
    }
    if(nextProps.fiatCurrency !== this.props.fiatCurrency){
      this.setState({
        fiatCurrency: nextProps.fiatCurrency
      })
    }
  }

  mapCoinSymbols(){
    const {cryptoCoins} = this.state;
    if(cryptoCoins !== undefined){
      var types = {};
      const coinTypes = cryptoCoins.map(obj =>{
        types[obj.name] = obj.symbol;
      });
      return types;
    }
  }

   addRow = (e) => {
    var rows = this.state.rows;
    rows.push('new row')
    this.setState({rows : rows})
    //this.props.mappedCoinTypes = this.mapCoinSymbols();
  }

  deleteRow = (e) => {
    var rows = this.state.rows;
    rows.pop('new row')
    this.setState({rows: rows})
  }

  handleSelectedCoin = coin => {
    let coinFound = {}
    coinFound = this.props.cryptoCoins.find(function (obj) {
      if(obj.symbol === coin)
        return obj;
    });
    this.setState({
      selectedCoin: coinFound
    });
  console.log("calc handleSelectedCoin: ", this.state.selectedCoin)
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
console.log("calc handleSelectedFiat: ", this.state.selectedFiat)
}

  render() {
    const {cryptoCoins} = this.state;
    const {fiatCurrency} = this.state;
    const {rows} = this.state;
    const {selectedCoin} = this.state;
    const {selectedFiat} = this.state;

    return (
      <div className="App">
        <p className="App-intro">
          Cryptocurrency Calculator Converter
        </p>
          <Button className="fa fa-plus fa-2x" onClick={this.addRow} />
          <Button className="fa fa-trash fa-2x" onClick={this.deleteRow} />

          <div className="card-row">
            <table className="table-container">
              <tbody>
                {rows.map((r, index) => (
                  <tr key={index}>
                    <td>
                      <CalculatorForm 
                        coin={cryptoCoins} 
                        fiat={fiatCurrency}                  
                        handleSelectedCoin={this.handleSelectedCoin}
                        handleSelectedFiat={this.handleSelectedFiat}
                        selectedCoin={selectedCoin}
                        selectedFiat={selectedFiat} 
                        /> 
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


export const mapStateToProps=(state)=>{
  return {
    rows: selector.rowInitialize(state),
    cryptoCoins: selector.cryptoCoins(state),
    fiatCurrency: fiatTypes,
    selectedCoin: selector.selectedCoinInitializer(state),
    selectedFiat: selector.selectedFiatInitializer(state),
    mappedCoinTypes: {}
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    coinActions: bindActionCreators(coinActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Calculator);
