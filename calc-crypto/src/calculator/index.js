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
    cryptoCoins: PropTypes.array,
    fiatSymbols: PropTypes.array,
    coinSymbols: PropTypes.array
  }

  constructor(props){
    super(props);

    this.state = {
      rows: this.props.rows,
      cryptoCoins: this.props.cryptoCoins,
      coinSymbols: this.props.coinSymbols,
      fiatSymbols: this.props.fiatSymbols,
    }

    this.mapCoinSymbols = this.mapCoinSymbols.bind(this);
    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  shouldComponentUpdate(nextState){
    return (
      this.state.coinSymbols !== nextState.coinSymbols ||
      this.state.fiatSymbols !== nextState.fiatSymbols
    )
  }

  componentDidMount(){
    this.props.coinActions.getCoinDataStart(); 
  }

  componentDidUpdate(prevState){
    const {fiatSymbols, coinSymbols} = this.state

    if(prevState.coinSymbols !== coinSymbols){
      this.setState({
        coinSymbols: coinSymbols
      })
    }

    if(prevState.fiatSymbols !== fiatSymbols){
      this.setState({
        fiatSymbols: fiatSymbols
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.cryptoCoins !== this.props.cryptoCoins){
      this.setState({
        cryptoCoins: nextProps.cryptoCoins
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
    let mappedSymbols = this.mapCoinSymbols();

    this.props.coinActions.saveCoinSymbols(mappedSymbols);
    this.props.coinActions.saveFiatSymbols(this.fiatTypes);
  }

  deleteRow = (e) => {
    var rows = this.state.rows;
    rows.pop('new row')
    this.setState({rows: rows})
  }

  render() {
    const {
      cryptoCoins, 
      fiatSymbols, 
      coinSymbols, 
      rows
    } = this.state;

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
                        cryptoCoinsData={cryptoCoins} 
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
    cryptoCoins: selector.cryptoCoins(state),
    fiatSymbols: selector.fiatSymbols(state),
    coinSymbols: selector.coinSymbols(state),
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    coinActions: bindActionCreators(coinActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Calculator);
