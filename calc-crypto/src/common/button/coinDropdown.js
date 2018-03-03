import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/coinActions';

class CoinDropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            coins: this.props.coins,
            fiat: this.props.fiat,
            selectCoinValue: 'BTC',
            selectFiatValue: 'USD',
            coinArray: [],
            faitArray:[]
        }
    }

    static propTypes = {
        coins: PropTypes.array.isRequired,
        fiat: PropTypes.array.isRequired,
        selectCoinValue: PropTypes.string,
        selectFiatValue: PropTypes.string,
        handleSelectedCoin: PropTypes.func.isRequired,
        handleSelectedFiat: PropTypes.func.isRequired
    }

    //invoked just before mounting occurs. will Render() once
    componentWillMount(){
        this.mapCoinsToDropDown(this.state.coins);
        this.mapFiatsToDropDown(this.state.fiat);
    }

    //invoked before a mounted component receives new props
    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps){
            this.setState({
                coins: nextProps.coins
            })
        }
    }

    //is invoked immediately after updating occurs.
    componentDidUpdate(prevProps, prevState){
        if(prevProps !== prevState.coinArray){
            if(this.state.coinArray <= 0 ) {
                this.mapCoinsToDropDown(prevProps.coins)
            }
        }
    }

    getInitialState () {
		return {
            selectCoinValue: 'BTC',
            selectFiatValue: 'USD',
        };
    }

	updateValue (newValue) {
		this.setState({
			selectCoinValue: newValue
        });
        this.props.handleSelectedCoin(newValue)
        console.log(`Selected: ${newValue}`);
    }

    updateFiatValue(value) {
        this.setState({
            selectFiatValue : value
        });
        this.props.handleSelectedFiat(value)
        console.log(`Selected Fiat: ${value}`);
    }

    mapCoinsToDropDown(obj) {
        var arr = [];

        obj.map((coin) => {
            arr.push({value: coin.symbol, label: coin.name})
            return {
                arr
            };
        })
        this.setState({
            coinArray: arr
        })
    }

    mapFiatsToDropDown(obj) {
        var arr = [];

        obj.map((coin) => {
            arr.push({value: coin.symbol, label: coin.name})
            return {
                arr
            };
        })
        this.setState({
            faitArray: arr
        })
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
                    />
                </div>
                <div className="typeAhead-dropdown col-sm-6">
                    <Select
                        id="state-select"
                        //ref={(ref) => { this.select; }}
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