import {combineReducers} from 'redux';
import * as reducerType from './coinReducer';

const rootReducer = combineReducers({
    coinData : reducerType.coinDataReducer,
    coinSymbols: reducerType.coinSymbolsReducer,
    fiatSymbols: reducerType.fiatSymbolsReducer
});

export default rootReducer;