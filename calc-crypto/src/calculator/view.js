import React from 'react';
import propTypes from 'prop-types';
import TypeAheadDropDown from '../common/button/type-ahead-box';
import {
    FormGroup,
    FormControl,
    Form
} from 'react-bootstrap';

export const CalculatorForm = ({coin, fiat}) => (
    <div className="container">
        <div className="row">
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

export default CalculatorForm

CalculatorForm.propTypes = {
    coin: propTypes.array,
    fiat: propTypes.array
};