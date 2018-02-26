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