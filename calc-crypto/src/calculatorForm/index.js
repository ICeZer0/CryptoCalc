import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoinDropDown from '../common/button/coinDropdown';
import InputForm from './inputFormView';
import Totals from './totalsView';

var divStyle = {
    marginTop: "15px",
  };

  
class CalculatorForm extends Component {
    static propTypes = {
        coin: PropTypes.array.isRequired,
        fiat: PropTypes.array.isRequired,
        selectedCoin: PropTypes.object,
        selectedFiat: PropTypes.object,
        handleSelectedCoin: PropTypes.func.isRequired, 
        handleSelectedFiat: PropTypes.func.isRequired, 
    };

    constructor(props){
        super(props);
        this.state = {
            coin: props.coin, 
            fiat: props.fiat, 
            handleSelectedCoin: props.handleSelectedCoin, 
            handleSelectedFiat: props.handleSelectedFiat, 
            selectedCoin: props.selectedCoin, 
            selectedFiat: props.selectedFiat,
            inputValue: 1
        }
    }

    handleNumberInput = e =>
        this.setState({
            inputValue: e.target.valueAsNumber
        });
    

    render() {
        let priceBTC = Object.keys(this.props.selectedCoin).length > 0 ? this.props.selectedCoin.price_btc : 0;
        let priceUSD = Object.keys(this.props.selectedCoin).length > 0 ? this.props.selectedCoin.price_usd : 0.00;
        let fiatSymbol = this.props.selectedFiat.symbol ? this.props.selectedFiat.symbol : 'USD';
        const {handleSelectedCoin, handleSelectedFiat, selectedCoin, selectedFiat} = this.state;
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
                            handleSelectedCoin={handleSelectedCoin}
                            handleSelectedFiat={handleSelectedFiat} />
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

export default CalculatorForm;