import * as types from '../actions/actionTypes'

export function coinDataReducer(state = [], action) {
    switch(action.type) {
        case types.GET_COIN_DATA_COMPLETE:
            return{ 
                coinData: action.payload.coinData
            };
        default:
            return state;
    }
}

export function coinSymbolsReducer(state = [], action) {
    switch(action.type) {
        case types.SAVE_COIN_SYMBOLS:
            // toastr.info(`Mapped coins`);
            return {
                coinSymbols: action.payload
            };
        default:
            return state;
    }
}

export function fiatSymbolsReducer(state = [], action) {
    switch(action.type) {
        case types.SAVE_FIAT_SYMBOLS:
            return {
                fiatSymbols: action.payload
            }
        default:
            return state;
    }
}