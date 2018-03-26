import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from "react-redux";


class CoinDropDown extends Component {  
    static propTypes = {
        coin: PropTypes.array,
        fiat: PropTypes.array,
        selectCoinValue: PropTypes.string,
        selectFiatValue: PropTypes.string,
        handleSelectedCoin: PropTypes.func,
        handleSelectedFiat: PropTypes.func
    }

    constructor(props){
        super(props);
        this.state = {
            coin: this.props.coin ? this.props.coin : [],
            fiat: this.props.fiat ? this.props.fiat : [],
            selectCoinValue: 'BTC',
            selectFiatValue: 'USD',
            coinArray: props.coin ? props.coin : [],
            faitArray: props.fiat ? props.fiat : [],
            handleSelectedCoin: this.props.handleSelectedCoin,
            handleSelectedFiat: this.props.handleSelectedFiat
        }
    }

    //invoked before a mounted component receives new props
    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps){
            this.setState({
                coin: nextProps.props.coin,
                fiat: nextProps.props.fiat
            })
        }
    }

    //is invoked immediately after updating occurs.
    componentDidUpdate(prevProps, prevState){
        const {coin} = this.state;
        const {fiat} = this.state;
        if(coin !== prevState.coin && fiat !== prevState.fiat){
            this.mapToDropDown(this.state.coin, this.state.fiat);
        }
    }

    getInitialState () {
		return {
            selectCoinValue: 'BTC',
            selectFiatValue: 'USD',
        };
    }

	updateValue (newValue) {
        const value = {}
        if(newValue !== undefined){
            if( newValue !== null){
                this.setState({
                    selectCoinValue: newValue
                });
                this.props.handleSelectedCoin(newValue)
                console.log(`Selected: ${newValue}`);
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
        console.log(`Selected Fiat: ${value}`);
    }

    mapToDropDown(obj1, obj2) {
        if(obj1.length > 0) {
            var arr = [];
            obj1.map((coin) => {
                arr.push({value: coin.symbol, label: coin.name})
            })
            this.setState({
                coinArray: arr
            })
        }
        if(obj2.length > 0) {
            var arr = [];
            obj2.map((coin) => {
                arr.push({value: coin.symbol, label: coin.name})
            })
            this.setState({
                faitArray: arr
            })
        }
        console.log("in mapToDropDown state:" + this.state.selectedCoin)
        this.updateValue(this.state.selectCoinValue)
        this.updateFiatValue(this.state.selectFiatValue)
    }

    clear(event){
        if(event.state.selectCoinValue !== null){
            this.setState({
                selectCoinValue: ''
            })
        }
    }

    render () {
        const coin = this.state.coinArray;
        const fiat = this.state.faitArray;

        return(
            <div>
                <div className="typeAhead-dropdown col-sm-6">
                    <Select
                        id="state-select"
                        //ref={(ref) => { this.select; }}
                        onBlurResetsInput={false}
                        onSelectResetsInput={false}
                        autoFocus
                        options= {coin}
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
                        options= {fiat}
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

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(CoinDropDown);