import {GET_COIN_DATA_COMPLETE, GET_COIN_DATA} from '../actions/actionTypes'
import initialState from './initialState';
import getCoinData from '../actions/coinActions'
import {mapCoin} from '../utils/responseHelper'

export default function mainReducer(state = initialState.coin, action) {
    if(action.type === GET_COIN_DATA){
        return {
            ...state,
            coin: action.payload.coinData
        };
    } else{
        return state;
    }
}