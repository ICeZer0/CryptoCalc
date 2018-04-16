import {combineReducers} from 'redux';
import coinDataReducer from './coinReducer';

const rootReducer = combineReducers({
    coinData : coinDataReducer
});

export default rootReducer;