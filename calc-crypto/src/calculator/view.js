import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import TypeAheadDropDown from '../common/button/type-ahead-box';
import {
    FormGroup,
    FormControl,
    Form
} from 'react-bootstrap';

let CalculatorForm = ({dispatch, coin, fiat}) => (
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
                <TypeAheadDropDown coins={coin} />
            </div>
            <div className="col-md-6">
                <TypeAheadDropDown coins={fiat} />
            </div>
        </div>
        <div className="row totals">
            <div className="col-sm-4">
                <span>{0} BTC</span>
            </div>
            <div className="col-sm-4">
                <span>=</span>
            </div>
            <div className="col-sm-4">
                <span>{0} USD</span>
            </div>
        </div>     
    </div>
)

CalculatorForm = connect()(CalculatorForm)

export default CalculatorForm

CalculatorForm.propTypes = {
    coin: PropTypes.array,
    fiat: PropTypes.array
};