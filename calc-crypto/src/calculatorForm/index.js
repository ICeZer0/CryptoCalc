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
            selectedFiat: props.selectedFiat
        }
    }

    render() {
        let priceBTC = this.props.selectedCoin !== undefined ? this.props.selectedCoin.price_btc : 0;
        let priceUSD = this.props.selectedCoin !== undefined ? this.props.selectedCoin.price_usd : 0.00;
        let fiatSymbol = this.props.selectedFiat.symbol ? this.props.selectedFiat.symbol : 'USD';
        const {handleSelectedCoin, handleSelectedFiat} = this.state;
        
        return (
            <div className="container" style={divStyle}>
                <InputForm />
                <div className="row click-buttons">
                    <div>
                        <CoinDropDown 
                            props={this.props}
                            handleSelectedCoin={() => handleSelectedCoin}
                            handleSelectedFiat={() => handleSelectedFiat} />
                    </div>
                </div>
                <Totals 
                    priceBTC = {priceBTC}
                    priceUSD = {priceUSD}
                    fiatSymbol = {fiatSymbol} />   
            </div>
        )
    }
}

export default CalculatorForm;