import * as actionTypes from './actionTypes';

export function getCoinDataStart(){
    return {
        type: actionTypes.GET_COIN_DATA_STARTED,
        payload: {

        }
    };
}

export function getCoinDataComplete(coinData){
    return {
        type: actionTypes.GET_COIN_DATA_COMPLETE,
        payload: {
            coinData
        }
    };
}

export function getCoinDataError(error){
    return {
        type: actionTypes.GET_COIN_DATA_ERROR,
        payload: {
            error
        }
    };
}
