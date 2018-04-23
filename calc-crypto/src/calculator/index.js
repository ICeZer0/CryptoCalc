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
    coinData: PropTypes.array,
    fiatSymbols: PropTypes.array,
    coinSymbols: PropTypes.array,
    fiatTypes: PropTypes.array
  }

  constructor(props){
    super(props);

    this.state = {
      rows: this.props.rows,
      coinData: this.props.coinData,
      coinSymbols: this.props.coinSymbols,
      fiatSymbols: this.props.fiatTypes,
    }

    this.mapCoinSymbols = this.mapCoinSymbols.bind(this);
    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);

    this.props.coinActions.saveFiatSymbols(this.props.fiatTypes);
  }

  componentDidMount(){
    this.props.coinActions.getCoinDataStart(); 
  }

  componentDidUpdate(prevState){
    const {coinData} = this.state;

    if(prevState.coinData !== coinData){
      if(coinData.length > 0){
        let mappedSymbols = this.mapCoinSymbols(coinData);
        this.props.coinActions.saveCoinSymbols(mappedSymbols);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.coinData !== this.props.coinData){
      this.setState({
        coinData: nextProps.coinData
      })
    }
    if(nextProps.coinSymbols !== this.props.coinSymbols){
      this.setState({
        coinSymbols: nextProps.coinSymbols
      })
    }
    if(nextProps.fiatSymbols !== this.props.fiatSymbols){
      this.setState({
        fiatSymbols: nextProps.fiatSymbols
      })
    }
  }

  mapCoinSymbols(cryptoCoins){
    if(cryptoCoins !== undefined){
      let arr = [];
      for(var coin of cryptoCoins){
        arr.push({ value: coin.symbol, label: coin.name});
      }
      return arr;
    }
  }

   addRow = (e) => {
    var rows = this.state.rows;
    rows.push('new row')
    this.setState({rows: rows})
  }

  deleteRow = (e) => {
    var rows = this.state.rows;
    rows.pop('new row')
    this.setState({rows: rows})
  }

  render() {
    const {
      coinData, 
      fiatSymbols, 
      coinSymbols
    } = this.props;
    const {rows} = this.state;

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
                        cryptoCoinsData={coinData} 
                        fiatSymbols={fiatSymbols} 
                        coinSymbols={coinSymbols}                 
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
    coinData: selector.cryptoCoins(state.coinData),
    coinSymbols: selector.coinSymbols(state.coinSymbols),
    fiatSymbols: selector.fiatSymbols(state.fiatSymbols),
    fiatTypes: fiatTypes
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    coinActions: bindActionCreators(coinActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Calculator);
