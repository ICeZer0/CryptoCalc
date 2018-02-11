import React from 'react'
import PropTypes from 'prop-types'
import {
    ButtonToolbar, 
    Button, 
    FormGroup,
    FormControl,
    Form,
    DropdownButton,
    MenuItem
} from 'react-bootstrap'

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
                    //value={this.state.value}
                    placeholder="Enter Amount to Convert"
                    //onChange={this.handleChange}
                />   
                <FormControl.Feedback />
            </Form>
        </div>
        <div className="row click-buttons">
            <div className="col-md-6">
            <DropdownButton id="-1" title="coin">
                {coin && coin.map((child,index) => {
                    return (
                        <MenuItem eventKey={index}>{child.name}</MenuItem>
                    );
                })}
                </DropdownButton>
            </div>
            <div className="col-md-6">
                <DropdownButton id="any"  title="Fiat">
                    {fiat && fiat.map((child, index) =>{
                        return (
                            <MenuItem eventKey={index}>{child}</MenuItem>
                        )
                    })}
                </DropdownButton>
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

CalculatorForm.PropTypes = {
    coin: PropTypes.array,
    fiat: PropTypes.array
};