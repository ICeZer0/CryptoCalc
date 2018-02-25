import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class TypeAheadDropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            coins: this.props.coins,
            selectValue: '',
            coinArray: []
        }
    }

    static propTypes = {
        coins: PropTypes.array.isRequired,
        selectValue: PropTypes.string
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
                    //ref={(ref) => { this.select.ref; }}
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