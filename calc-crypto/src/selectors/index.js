import {fiatTypes} from "../common/objects"

export const coinSelector = (state) => {
    if(state && state.coin){
        return state.coin
    }
    return [];
}

export const rowInitialize = (state) => {
    if(state && state.row){
        return state.row
    }
    return [];
}

export const selectedCoinInitializer = (state) => {
    if(state & state.selectedCoin){
        return state.selectedCoin
    }
    return {};
}

export const selectedFiatInitializer = (state) => {
    if(state & state.selectedFiat){
        return state.selectedFiat
    }
    return {};
}

export const fiatCurrenciesInit = (state) => {
    if(state & state.fiatCurrency){
        return state.fiatCurrency
    }
    return fiatTypes;
}