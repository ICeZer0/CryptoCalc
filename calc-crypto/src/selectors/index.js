
export const cryptoCoins = (state) => {
    if(state && state.coinData){
        return state.coinData.coin
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
    if(state & state.coinData){
        return state.coinData.coinSymbols
    }
    return [];
}

export const fiatSymbols = (state) => {
    if(state & state.coinData){
        return state.coinData.fiatSymbols
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
