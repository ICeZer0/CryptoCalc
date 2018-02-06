import * as actionTypes from './actionTypes';

export function getCoinData(coinData){
    return {
        type: actionTypes.GET_COIN_DATA,
        payload: {
            coinData
        }
    };
}
