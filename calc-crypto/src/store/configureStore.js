import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers/index';
import sagas from '../sagas';

const pack = require('../../package.json');
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export default function configureStore(initialState, history) {
    let store = {};
    let devTools = (f) => f;

    if(window.devToolsExtension) {
        devTools = window.devToolsExtension;
    }

    let createStoreWithMiddleware = compose(
        applyMiddleware(sagaMiddleware, logger)
    )(createStore);

    //setup devTools
    store = createStoreWithMiddleware(rootReducer, initialState, devTools());

    sagaMiddleware.run(sagas);

    return store;
}

