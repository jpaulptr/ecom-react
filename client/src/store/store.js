
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import retail from '../reducers/retail';
import cart from '../reducers/cart';
import authentication from '../reducers/authentication';

const combinedReducers = combineReducers({
  routing: routerReducer,
  app: retail,
  cart: cart,
  authentication
});

// This seems a little odd to export this.
export const history = createHistory()
const router = routerMiddleware(history);

const combinedMiddleware = applyMiddleware(router, thunk, logger);

export const store = createStore(combinedReducers, composeWithDevTools(combinedMiddleware));
