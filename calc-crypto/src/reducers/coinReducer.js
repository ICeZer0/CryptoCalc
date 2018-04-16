import * as types from '../actions/actionTypes'
import initialState from './initialState';

export default function coinDataReducer(state = initialState.coin, action) {
    switch(action.type) {
        case types.GET_COIN_DATA_COMPLETE:
            return{ 
                ...state,
                coin: action.payload.coinData
            };
        default:
            return state;
    }
}