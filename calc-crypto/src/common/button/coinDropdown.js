import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as selector from '../../selectors/index';
import { connect } from "react-redux";


class CoinDropDown extends Component {  
    static propTypes = {
        cryptoCoinsData: PropTypes.array.isRequired,
        coinSymbols: PropTypes.array,
        fiatSymbols: PropTypes.array,
        selectCoinValue: PropTypes.string,
        selectFiatValue: PropTypes.string,
        handleSelectedCoin: PropTypes.func,
        handleSelectedFiat: PropTypes.func
    }

    constructor(props){
        super(props);
        this.state = {
            cryptoCoinsData: props.cryptoCoinsData,
            coinSymbols: props.coinSymbols,
            fiatSymbols: props.fiatSymbols,
            selectCoinValue: 'BTC',
            selectFiatValue: 'USD',
            handleSelectedCoin: this.props.handleSelectedCoin,
            handleSelectedFiat: this.props.handleSelectedFiat
        }
    }

    //invoked before a mounted component receives new props
    componentWillReceiveProps(nextProps) {
        if(nextProps.coinData !== this.props.coinData){
            this.setState({
              coinData: nextProps.coinData
            })
          }
          if(nextProps.coinSymbols !== this.props.coinSymbols){
            this.setState({
              coinSymbols: nextProps.coinSymbols
            })
          }
          if(nextProps.fiatSymbols !== this.props.fiatSymbols){
            this.setState({
              fiatSymbols: nextProps.fiatSymbols
            })
          }
    }

    //is invoked immediately after updating occurs.
    componentDidUpdate(prevProps, prevState){
        const {coinSymbols, fiatSymbols} = this.state;
        if(coinSymbols !== prevState.coinSymbols){
            this.setState({
                coinSymbols: coinSymbols
            });
        }
        if(fiatSymbols !== prevState.fiatSymbols){
            this.setState({
                fiatSymbols: fiatSymbols
            });
        }
    }

    getInitialState () {
		return {
            selectCoinValue: 'BTC',
            selectFiatValue: 'USD',
        };
    }

	updateValue (newValue) {
        if(newValue !== undefined){
            if( newValue !== null){
                this.setState({
                    selectCoinValue: newValue
                });
                () => {this.props.handleSelectedCoin(newValue)}
            }
        }
        if( newValue === null){
            this.setState({
                selectCoinValue: ''
            })
        }
    }

    updateFiatValue(value) {
        this.setState({
            selectFiatValue : value
        });
        this.props.handleSelectedFiat(value)
    }

    // clear(event){
    //     if(event.state.selectCoinValue !== null){
    //         this.setState({
    //             selectCoinValue: ''
    //         })
    //     }
    // }

    render () {
        const {fiatSymbols, coinSymbols} = this.state;

        return(
            <div>
                <div className="typeAhead-dropdown col-sm-6">
                    <Select
                        id="state-select"
                        //ref={(ref) => { this.select; }}
                        onBlurResetsInput={false}
                        onSelectResetsInput={false}
                        autoFocus
                        options= {coinSymbols}
                        simpleValue
                        clearable={true}
                        name="selected-state"
                        disabled={false}
                        value={this.state.selectCoinValue}
                        onChange={this.updateValue.bind(this)}
                        rtl={false}
                        searchable={true}
                        //onFocus={this.clear(this)}
                    />
                </div>
                <div className="typeAhead-dropdown col-sm-6">
                    <Select
                        id="state-select"
                        onBlurResetsInput={false}
                        onSelectResetsInput={false}
                        autoFocus
                        options= {fiatSymbols}
                        simpleValue
                        clearable={true}
                        name="selected-state"
                        disabled={false}
                        value={this.state.selectFiatValue}
                        onChange={this.updateFiatValue.bind(this)}
                        rtl={false}
                        searchable={true}
                    />
                </div>
            </div>
        );
    }
}

export const mapStateToProps=(state)=> {
    return {
      rows: selector.rowInitialize(state),
      coinData: selector.cryptoCoins(state.coinData),
      coinSymbols: selector.coinSymbols(state.coinSymbols),
      fiatSymbols: selector.fiatSymbols(state.fiatSymbols),
    }
  };
  

const mapDispatchToProps = dispatch => {
    return {

    };
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(CoinDropDown);