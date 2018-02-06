import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CalculatorFrom from './view';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import {mapCoin} from '../utils/responseHelper';
import PropTypes from "prop-types";



class Calculator extends Component {
  static propTypes = {
    coinObject: PropTypes.object,
  }
  constructor(props) {
    super();
    this.state = {
      coinType: 'bitcoin',
      fiatType: 'USD'
    };

    this.updateCoinData = this.updateCoinData.bind(this);
  }

  // componentDidMount () {
  // }

  updateCoinData(coinType,fiatType) {
    this.setState(function () {
      return {
        coinType: coinType,
        fiatType: fiatType
      }
    })
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Cryptocurrency Calculator Converter
        </p>
        {console.log(this.props.coinObject.coin) }       
        <CalculatorFrom handleClick={this.props.loadCoin} coin={this.props.coinObject}/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    coinObject: state
  }
};

export default connect (mapStateToProps, actionCreators)(Calculator);


// function getCoinPrice(coin,convertCurrency) {
//     if(coin === null){
//         return null;
//     }
//     var url = "https://api.coinmarketcap.com/v1/ticker/" + coin + "?convert=" + convertCurrency;
//     var response = UrlFetchApp.fetch(url);
//     var json = JSON.parse(response.getContentText());
//     return (
//         <div>
//             <pre>{json}</pre>
//         </div>          
//     );
// };



    // componentDidMount() {
      //     let url = 'https://api.coinmarketcap.com/v1/ticker/litecoin';
      //     let iterator = fetch(url, {method: 'GET', mode: 'no-cors'});
      //     iterator
      //       .then(response => {
      //           if (response.status >= 400) {
      //               throw new Error("Bad response from server");
      //             }
      //           console.log('res:',response)
      //         return response.json();
      //     }).then(data => {
      //         let pictures = data.id;
      //       this.setState({pictures: pictures});
      //       console.log("state", this.state.pictures);
      //     })
      // }