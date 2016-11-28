import {applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
// import countReducer from './reducers/countReducer';
import boardReducer from './reducers';

const logger = createLogger({collapsed:true});

const middleware = applyMiddleware(logger);

const store = createStore(boardReducer,middleware);

export default store
