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
            selectValue: '',
            coinArray: [],
        }
    }

    static propTypes = {
        coins: PropTypes.array.isRequired,
        selectValue: PropTypes.string,
        handleSelectedCoin: PropTypes.func.isRequired
    }

    //invoked just before mounting occurs. will Render() once
    componentWillMount(){
        this.mapCoinsToDisplay(this.state.coins)
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
                this.mapCoinsToDisplay(prevProps.coins)
            }
        }
    }

    getInitialState () {
		return {
			selectValue: ''
        };
    }

	updateValue (newValue) {
		this.setState({
			selectValue: newValue
        });
        this.props.handleSelectedCoin(newValue)
        console.log(`Selected: ${newValue}`);
    }

    mapCoinsToDisplay(obj) {
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

    render () {
        const item = this.state.coinArray;

        return(
            <div className="typeAhead-dropdown">
                <Select
                    id="state-select"
                    //ref={(ref) => { this.select; }}
                    onBlurResetsInput={false}
                    onSelectResetsInput={false}
                    autoFocus
                    options= {item}
                    simpleValue
                    clearable={true}
                    name="selected-state"
                    disabled={false}
                    value={this.state.selectValue}
                    onChange={this.updateValue.bind(this)}
                    rtl={false}
                    searchable={true}
                />
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