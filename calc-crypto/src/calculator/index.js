import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CalculatorFrom from './view';

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

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: []
          };
      };

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


  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Cryptocurrency Calculator Converter
        </p>
        <CalculatorFrom/>
      </div>
    );
  }
}
