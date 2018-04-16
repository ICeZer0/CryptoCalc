import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/coinActions";
import * as types from "../actions/actionTypes"
import Api from "../api/cmcApi";

export function* getCoinDataStart(action) {
    try{
        const coinData = yield call(
            Api.getAllCoinData,
            action.payload
        );
        yield put(actions.getCoinDataComplete(coinData));
    } catch(e) {
        yield put(actions.getCoinDataError(e));
    }
}

export function* watchGetCoinData() {
    yield takeEvery(types.GET_COIN_DATA_STARTED, getCoinDataStart);
}