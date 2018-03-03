import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import CoinDropDown from '../common/button/coinDropdown';
import {
    FormGroup,
    FormControl,
    Form
} from 'react-bootstrap';

var divStyle = {
    marginTop: "15px",
  };

  
let CalculatorForm = ({coin, fiat, handleSelectedCoin, handleSelectedFiat, selectedCoin, selectedFiat}) => (
    <div className="container" style={divStyle}>
        <div className="row value-enter col-lg-12">
            <Form>
                <FormGroup 
                    controlId="formInput"
                    validationState='success'>
                </FormGroup>
                <FormControl
                    type="number"
                    placeholder="Enter Amount to Convert"
                />   
                <FormControl.Feedback />
            </Form>
        </div>
        <div className="row click-buttons">
            <div>
                <CoinDropDown 
                    coins={coin} 
                    fiat={fiat} 
                    handleSelectedCoin={handleSelectedCoin} 
                    handleSelectedFiat={handleSelectedFiat} />
            </div>
        </div>
        <div className="row totals">
            <div className="col-sm-4">
                <span> {selectedCoin !== undefined ? selectedCoin.price_btc : 0} BTC Price</span>
            </div>
            <div className="col-sm-4">
                <span>=</span>
            </div>
            <div className="col-sm-4">
                <span>{selectedCoin !== undefined ? selectedCoin.price_usd : 0.00} {selectedFiat.symbol ? selectedFiat.symbol : 'USD'}</span>
            </div>
        </div>     
    </div>
)

CalculatorForm = connect()(CalculatorForm)

export default CalculatorForm

CalculatorForm.propTypes = {
    coin: PropTypes.array.isRequired,
    fiat: PropTypes.array.isRequired,
    selectedCoin: PropTypes.object,
    selectedFiat: PropTypes.object
};