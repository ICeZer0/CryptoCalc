import React from 'react'
import PropTypes from 'prop-types';

const Totals = ({inputValue, priceBTC, priceUSD, fiatSymbol,coinSymbol}) => (
    <div>
        <div className="row totals">
            <div className="col-lg-12">
                <span>{inputValue} = ${inputValue * priceUSD} ({fiatSymbol}) | ฿{inputValue * priceBTC} (BTC)</span>
            </div>
        </div>  
        <div className="row totals">
            <div className="col-lg-12">
                <span>{inputValue} = ${priceUSD===0? NaN:inputValue / priceUSD}({coinSymbol}) </span>
            </div>
        </div>
    </div>
)

export default Totals

Totals.propTypes = {
    priceBTC: PropTypes.number,
    priceUSD: PropTypes.number,
    fiatSymbol: PropTypes.string,
    coinSymbol: PropTypes.string
}
