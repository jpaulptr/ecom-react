
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-sessionstorage';
import retail from '../reducers/retail';
import cart from '../reducers/cart';
import authentication from '../reducers/authentication';

const actionBlackList = ['ADD_SHIPPING_PAYMENT_INFORMATION', 'ORDER_IN_PROCESS', 'ORDER_COMPLETE', 'ORDER_ERROR', 'GET_ITEM', 'GET_ITEM_SUCCESS', 'GET_ITEM_FAILURE', 'GET_ORDERS', 'GET_ORDERS_SUCCESS', 'GET_ORDERS_FAILURE', 'GET_SECTIONS', 'GET_SECTIONS_FAILURE', 'GET_SECTIONS_SUCCESS'];

const combinedReducers = combineReducers({
  routing: routerReducer,
  app: retail,
  cart: cart,
  authentication
});

const reducerWithStorage = storage.reducer(combinedReducers);

const engine = createEngine('session');

export const history = createHistory()
const router = routerMiddleware(history);

// Don't store the item's in session storage because prices can be volatile.
const storageMiddleware = storage.createMiddleware(engine, actionBlackList);
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(router, thunk, logger, storageMiddleware))(createStore);

export const store = createStoreWithMiddleware(reducerWithStorage)//, composeWithDevTools(combinedMiddleware));

const load = storage.createLoader(engine);
load(store);

// Notice that our load function will return a promise that can also be used
// to respond to the restore event.
load(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));

export const getStore = () => store.getState();
export const getDispatch = () => store;