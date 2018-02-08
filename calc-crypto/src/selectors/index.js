export const coinSelector = (state) => {
    if(state && state.coin){
        return state.coin
    }
    return [];
}