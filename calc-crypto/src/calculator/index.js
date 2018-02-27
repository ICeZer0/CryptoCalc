import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CalculatorForm from './view';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import PropTypes from "prop-types";
import {coinSelector, rowInitialize} from '../selectors/index';
import {fiatTypes} from "../common/objects"

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      rows: this.props.rows,
      coinMapToProps: this.props.coinMapToProps,
      fiatCurrency : fiatTypes,
      selectedCoin: {}
    }
  }

  static propTypes = {
    rows: PropTypes.array,
    coinMapToProps: PropTypes.array,
    fiatCurrency: PropTypes.array
  }

  componentDidMount() {
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

  render() {
    const {coinMapToProps} = this.state;
    const {fiatCurrency} = this.state;
    const {rows} = this.state;
    const {selectedCoin} = this.state;

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
                  selectedCoin={selectedCoin}/> 
                {rows.map((r, index) => (
                  <tr key={index}>
                    <td>
                      <CalculatorForm 
                        coin={coinMapToProps} 
                        fiat={fiatCurrency}                  
                        handleSelectedCoin={this.handleSelectedCoin}
                        selectedCoin={selectedCoin} /> 
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
