import {GET_COIN_DATA} from '../actions/actionTypes'
import initialState from './initialState';

export default function mainReducer(state = initialState.coin, action) {
    switch(action.type) {
        case GET_COIN_DATA:
            return{ 
                ...state,
                coin: action.payload.coinData
            };
        default:
            return state;
    }
}