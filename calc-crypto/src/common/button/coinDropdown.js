import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const CoinDropDown = (props) => {
    return (
        <div>
            <div className="typeAhead-dropdown col-sm-6">
                <Select
                    id="state-select"
                    //ref={(ref) => { this.select; }}
                    placeholder= 'Select Crypto...'
                    onBlurResetsInput={false}
                    onSelectResetsInput={false}
                    autoFocus
                    options= {props.coinSymbols}
                    simpleValue
                    clearable={true}
                    name="selected-state"
                    disabled={false}
                    value={props.selectedCoinValue}
                    onChange={props.handleSelectedCoin}
                    rtl={false}
                    searchable={true}
                    //onFocus={this.clear(this)}
                />
            </div>
            <div className="typeAhead-dropdown col-sm-6">
                <Select
                    id="state-select"
                    placeholder= 'Select Currency...'
                    onBlurResetsInput={false}
                    onSelectResetsInput={false}
                    autoFocus
                    options= {props.fiatSymbols}
                    simpleValue
                    clearable={true}
                    name="selected-state"
                    disabled={false}
                    value={props.selectedFiatValue}
                    onChange={props.handleSelectedFiat}
                    rtl={false}
                    searchable={true}
                />
            </div>
        </div>
    );
}; 

CoinDropDown.propTypes = {
    coinSymbols: PropTypes.array,
    fiatSymbols: PropTypes.array,
    selectedCoinValue: PropTypes.obj,
    selectedFiatValue: PropTypes.obj,
    handleSelectedCoin: PropTypes.func,
    handleSelectedFiat: PropTypes.func
};

export default CoinDropDown;