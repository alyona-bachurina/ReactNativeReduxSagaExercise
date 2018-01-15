'use strict';

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {

    const store = createStore(reducer, applyMiddleware(sagaMiddleware /*,loggerMiddleware*/));
    sagaMiddleware.run(sagas);
    return store
}
