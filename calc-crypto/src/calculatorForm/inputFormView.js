import React from 'react';
import {
    FormGroup,
    FormControl,
    Form
} from 'react-bootstrap';

const InputForm = (props) => (
    <div className="row value-enter col-lg-12">
        <Form>
            <FormGroup 
                controlId="formInput"
                validationState='success'>
            </FormGroup>
            <FormControl
                type="number"
                default={props.inputValue}
                onChange={props.handleNumberInput.bind(this)}
                placeholder="Enter Amount to Convert"
            />   
            <FormControl.Feedback />
        </Form>
    </div>
)
export default InputForm;