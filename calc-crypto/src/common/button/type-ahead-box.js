import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class TypeAheadBox extends Component {
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

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps){
            this.setState({
                coins: nextProps.coins
            })
        }
    }

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
        const {coinArray} = this.state;

        return(
            <div className="section">
                <Select
                    id="state-select"
                    //ref={(ref) => { this.select.ref; }}
                    onBlurResetsInput={false}
                    onSelectResetsInput={false}
                    autoFocus
                    options= {coinArray}
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