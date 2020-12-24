import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

