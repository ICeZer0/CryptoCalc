import {fork, all} from 'redux-saga/effects';
import * as coinData from './coinDataSaga';

export default function* root() {
    yield all([
        fork(coinData.watchGetCoinData)
    ]);
}