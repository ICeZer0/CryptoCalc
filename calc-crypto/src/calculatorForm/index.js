import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoinDropDown from '../common/button/coinDropdown';
import InputForm from './inputFormView';
import Totals from './totalsView';
import {connect} from 'react-redux';
import * as actions from '../actions/coinActions';
import * as selector from '../selectors/index';


var divStyle = {
    marginTop: "15px",
  };

  
class CalculatorForm extends Component {
    static propTypes = {
        cryptoCoinsData: PropTypes.array.isRequired,
        fiatSymbols: PropTypes.array.isRequired,
        coinSymbols: PropTypes.array.isRequired,
    };

    constructor(props){
        super(props);
        
        this.state = {
            cryptoCoinsData: props.cryptoCoinsData,
            fiatSymbols: props.fiatSymbols,
            coinSymbols: props.coinSymbols,
            handleSelectedCoin: props.handleSelectedCoin, 
            handleSelectedFiat: props.handleSelectedFiat, 
            selectedCoin: props.selectedCoin, 
            selectedFiat: props.selectedFiat,
            inputValue: 1
        }

        this.handleSelectedCoin = this.handleSelectedCoin.bind(this);
        this.handleSelectedFiat = this.handleSelectedFiat.bind(this);
    }

    handleSelectedCoin = coin => {
        console.log(`in handler: ${coin}`);
        let coinFound = {}
        coinFound = this.props.cryptoCoinsData.find(obj => {
          if(obj.symbol === coin)
            return obj;
        });
        this.setState({
          selectedCoin: coinFound
        });
    }
    
    handleSelectedFiat = coin => {
        console.log(`in other handler: ${coin}`);
      let coinFound = {}
      coinFound = this.state.fiatSymbols.find(obj => {
        if(obj.symbol === coin)
          return obj;
      });
      this.setState({
        selectedFiat: coinFound
      });
    }

    handleNumberInput = e =>
        this.setState({
            inputValue: e.target.valueAsNumber
        });
    

    render() {
        let priceBTC = Object.keys(this.props.selectedCoin).length > 0 ? this.props.selectedCoin.price_btc : 0;
        let priceUSD = Object.keys(this.props.selectedCoin).length > 0 ? this.props.selectedCoin.price_usd : 0.00;
        let fiatSymbol = this.props.selectedFiat.symbol ? this.props.selectedFiat.symbol : 'USD';
        // let priceBTC = 3.21;
        // let priceUSD = 4.45;
        // let fiatSymbol = 'USD';
        const {
            handleSelectedCoin, 
            handleSelectedFiat, 
            selectedCoin, 
            selectedFiat
        } = this.state;
        const inputValue = isNaN(this.state.inputValue) ? 0 : this.state.inputValue;
        
        return (
            <div className="container" style={divStyle}>
                <InputForm 
                    onChange={this.handleNumberInput} 
                    handleNumberInput={this.handleNumberInput} 
                    inputValue={inputValue}  />
                <div className="row click-buttons">
                    <div>
                        <CoinDropDown 
                            props={this.props}
                            handleSelectedCoin={() => handleSelectedCoin}
                            handleSelectedFiat={() => handleSelectedFiat} />
                    </div>
                </div>
                <Totals 
                    inputValue={inputValue}
                    priceBTC = {parseFloat(priceBTC)}
                    priceUSD = {parseFloat(priceUSD)}
                    fiatSymbol = {fiatSymbol} />   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedCoin: selector.selectedCoinInitializer(state),
        selectedFiat: selector.selectedFiatInitializer(state)
    }
}

export default connect(mapStateToProps, actions)(CalculatorForm);