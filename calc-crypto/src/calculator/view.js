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

const CalculatorFrom = ({handleClick, coin}) => (
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
            <div className="col-md-5">
                <DropdownButton id="any" title="Coin">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Action2</MenuItem>
                </DropdownButton>
            </div>
            <div className="col-md-2">
                <Button onClick={()=>{handleClick()}}>=</Button>
            </div>
            <div className="col-md-5">
                <DropdownButton id="any"  title="Fiat">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Action2</MenuItem>
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
                <span>{console.log("COINS "+ this.coin)} {0} USD</span>
            </div>
        </div>     
    </div>
)

export default CalculatorFrom

/*
--Objects--
UserAmount
CoinType
FiatType
CoinPrice
FiatPrice
*/