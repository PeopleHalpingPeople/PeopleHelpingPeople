import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import messageReducer from './messages.js';

let reducers = combineReducers({ messageReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();