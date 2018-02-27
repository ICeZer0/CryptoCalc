import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import CoinDropDown from '../common/button/coinDropdown';
import {
    FormGroup,
    FormControl,
    Form
} from 'react-bootstrap';

let CalculatorForm = ({coin, fiat, handleSelectedCoin, selectedCoin}) => (
    <div className="container">
        <div className="row value-enter">
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
            <div className="col-md-6">
                <CoinDropDown coins={coin} handleSelectedCoin={handleSelectedCoin} />
            </div>
            <div className="col-md-6">
                <CoinDropDown coins={fiat} handleSelectedCoin={handleSelectedCoin} />
            </div>
        </div>
        <div className="row totals">
            <div className="col-sm-4">
                <span> {selectedCoin.price_btc} BTC Price</span>
            </div>
            <div className="col-sm-4">
                <span>=</span>
            </div>
            <div className="col-sm-4">
                <span>{selectedCoin.price_usd} USD</span>
            </div>
        </div>     
    </div>
)

CalculatorForm = connect()(CalculatorForm)

export default CalculatorForm

CalculatorForm.propTypes = {
    coin: PropTypes.array.isRequired,
    fiat: PropTypes.array.isRequired,
    selectedCoin: PropTypes.object
};