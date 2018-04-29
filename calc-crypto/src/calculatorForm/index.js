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
        coinSymbols: PropTypes.array.isRequired
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
            inputValue: props.number
        }

        this.handleSelectedCoin = this.handleSelectedCoin.bind(this);
        this.handleSelectedFiat = this.handleSelectedFiat.bind(this);
    }

    shouldComponentUpdate(nextState, nextProps){
        return(
            this.state.selectedCoin !== nextState.selectedCoin ||
            this.state.selectedFiat !== nextState.selectedFiat ||
            this.state.cryptoCoinsData !== nextState.cryptoCoinsData
        )
    }

    componentWillUpdate(nextProps, nextState){
        if(this.state.selectedCoin !== nextState.selectedCoin) {
            this.setState({
                selectedCoin: nextState.selectedCoin
              });
        }
        if(this.state.selectedFiat !== nextState.selectedFiat){
            this.setState({
                selectedFiat: nextState.selectedFiat
            });
        }     
    }

    handleSelectedCoin = coin => {
        const{cryptoCoinsData} = this.props;

        let coinFound = {}
        coinFound = cryptoCoinsData.find(obj => {
          if(obj.symbol === coin){
            coinFound = obj;

            this.setState({
                selectedCoin: obj
            });
          }
        });
        return coinFound;
    }
    
    handleSelectedFiat = coin => {
        const{fiatSymbols} = this.props;

        let coinFound = {}
        coinFound = fiatSymbols.find(obj => {
            if(obj.value === coin){
                coinFound = obj;

                this.setState({
                    selectedFiat: obj
                });
            }
        });
        return coinFound;
    }

    handleNumberInput = e =>
        this.setState({
            inputValue: e.target.valueAsNumber
        });
    

    render() {
        const {
            inputValue,
            selectedCoin, 
            selectedFiat
        } = this.state;
        let priceBTC = Object.keys(selectedCoin).length !== 0 ? selectedCoin.price_btc : 0;
        let priceUSD = Object.keys(selectedCoin).length !== 0 ? selectedCoin.price_usd : 0;
        const fiatSymbol = selectedFiat.value ? selectedFiat.value : 'USD';
        const coinSymbol = selectedCoin.symbol ? selectedCoin.symbol : '!';

        let input = isNaN(inputValue) ? 1 : inputValue;
        let selectedCoinValue = Object.keys(selectedCoin).length !== 0 ? {value: selectedCoin.symbol, label: selectedCoin.name} : this.props.coinSymbols[0];
        let selectedFiatValue = Object.keys(selectedFiat).length !== 0 ? selectedFiat : this.props.fiatSymbols[0];

        return (
            <div className="container" style={divStyle}>
                <InputForm 
                    onChange={this.handleNumberInput} 
                    handleNumberInput={this.handleNumberInput} 
                    inputValue={input}  />
                <div className="row click-buttons">
                    <div>
                        <CoinDropDown 
                            coinSymbols={this.props.coinSymbols}
                            fiatSymbols={this.props.fiatSymbols}
                            selectedCoinValue={selectedCoinValue}
                            selectedFiatValue={selectedFiatValue}
                            handleSelectedCoin={this.handleSelectedCoin}
                            handleSelectedFiat={this.handleSelectedFiat} />
                    </div>
                </div>
                <Totals 
                    inputValue = {input}
                    priceBTC = {parseFloat(priceBTC)}
                    priceUSD = {parseFloat(priceUSD)}
                    fiatSymbol = {fiatSymbol}
                    coinSymbol = {coinSymbol} />   
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