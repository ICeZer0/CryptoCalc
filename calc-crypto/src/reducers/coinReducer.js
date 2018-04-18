import * as types from '../actions/actionTypes'
import initialState from './initialState';
import toastr from 'toastr';

export default function coinDataReducer(state = initialState.coin, action) {
    switch(action.type) {
        case types.GET_COIN_DATA_COMPLETE:
            return{ 
                ...state,
                coin: action.payload.coinData
            };
        case types.SAVE_COIN_SYMBOLS:
            // toastr.info(`Mapped coins`);
            return {
                ...state,
                coinSymbols: action.payload.coinSymbols
            };
        case types.SAVE_COIN_SYMBOLS:
            return {
                ...state,
                fiatSymbols: action.payload.fiatSymbols
            }
        default:
            return state;
    }
}