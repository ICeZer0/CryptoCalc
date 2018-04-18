
export const cryptoCoins = (state) => {
    if(state && state.coinData){
        return state.coinData
    }
    return [];
}

export const rowInitialize = (state) => {
    if(state && state.row){
        return state.row
    }
    return [1];
}

export const coinSymbols = (state) => {
    if(state && state.coinSymbols){
        return state.coinSymbols
    }
    return [];
}

export const fiatSymbols = (state) => {
    if(state && state.fiatSymbols){
        return state.fiatSymbols.fiatSymbols
    }
    return [];
}

export const selectedCoinInitializer = (state) => {
    if(state && state.selectedCoin){
        return state.selectedCoin
    }
    return {};
}

export const selectedFiatInitializer = (state) => {
    if(state && state.selectedFiat){
        return state.selectedFiat
    }
    return {};
}
