import React from 'react'
import PropTypes from 'prop-types';

const Totals = ({inputValue, priceBTC, priceUSD, fiatSymbol}) => (
    <div className="row totals">
        <div className="col-sm-4">
            <span> {inputValue * priceBTC} BTC Price</span>
        </div>
        <div className="col-sm-4">
            <span>=</span>
        </div>
        <div className="col-sm-4">
            <span>{inputValue * priceUSD} {fiatSymbol}</span>
        </div>
    </div>  
)

export default Totals

Totals.propTypes = {
    priceBTC: PropTypes.number,
    priceUSD: PropTypes.number,
    fiatSymbol: PropTypes.string
}
