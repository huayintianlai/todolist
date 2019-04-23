import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

const store = createStore(reducer, enhancer);

// then run the saga
sagaMiddleware.run(mySaga)

export default store;