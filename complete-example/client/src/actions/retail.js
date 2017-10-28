import { getUserToken, getUserId } from '../reducers/state-mappers/authentication';
import { getSections as getSectionsMapper } from '../reducers/state-mappers/retail';
import { ErrorLogin } from './authentication';
import { authenticatedGET, unauthenticatedGET } from "../api/api";

export const DISPLAY_ITEM = 'DISPLAY_ITEM';
export const DISPLAY_SECTION = 'DISPLAY_SECTION';
export const ADD_ITEM_TO_CART = 'ADD_ITEM';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM';

export const GET_ITEM = 'GET_ITEM';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';

export const GET_SECTIONS = 'GET_SECTIONS';
export const GET_SECTIONS_SUCCESS = 'GET_SECTIONS_SUCCESS';
export const GET_SECTIONS_FAILURE = 'GET_SECTIONS_FAILURE';

export function displayItem(id) {
  return { type: DISPLAY_ITEM, id }
}

export function displaySection(id) {
  return { type: DISPLAY_SECTION, id }
}

export function getItem(id) {
  return { type: GET_ITEM, id }
}

export function getItemSuccess(item) {
  return { type: GET_ITEM_SUCCESS, item: item }
}

export function getItemFailure(id) {
  return { type: GET_ITEM_FAILURE, id }
}

export function getOrders(userId) {
  return { type: GET_ORDERS, userId }
}

export function getOrderSuccess(orders) {
  return { type: GET_ORDERS_SUCCESS, orders }
}

export function getOrderError(error) {
  return { type: GET_ORDERS_FAILURE, error }
}

export function getSections() {
  return { type: GET_SECTIONS }
}

export function getSectionsSuccess(sections) {
  return { type: GET_SECTIONS_SUCCESS, sections }
}

export function getSectionsError(error) {
  return { type: GET_SECTIONS_FAILURE, error }
}

export function fetchItem(id) {
  return function (dispatch) {

    dispatch(getItem(id));

    unauthenticatedGET(`items/${id}`).then((result) => {
      dispatch(getItemSuccess(result.item))
    }).catch((error) => {
      console.log(error)
    });
  }
}

export function shouldFetchItem(state, id) {
  const item = state.app.items.find((element) => element.id === id)
  if (!item) {
    return true
  } else {
    return false;
  }
}

export const fetchItemIfNeeded = (id) => (dispatch, getState) => {
  if (shouldFetchItem(getState(), id)) {
    return dispatch(fetchItem(id))
  } else {
    return Promise.resolve()
  }
};


// Get orders
export const getAllOrders = (userid, token) => {
  // Thunk middleware will handle this...
  return function (dispatch) {
    // Set the state of the request
    dispatch(getOrders(userid));

    authenticatedGET(`orders/user/${userid}`, token)
      .then((result) => {
        dispatch(getOrderSuccess(result.orders))
      }).catch((error) => {
        dispatch(getOrderError(error));
        if (error.result) {
          if (error.result.status === 401) {
            dispatch(ErrorLogin({ isLoggedIn: false, error }))
          }
        }
      });
  }
}

export const fetchAllOrders = () => (dispatch, getState) => {
  const state = getState();

  if (state.app.requestingOrders) {
    return Promise.resolve();
  }
  return dispatch(getAllOrders(getUserId(state), getUserToken(state)));
}

// Get Sections
export const getAllSections = () => {
  return function (dispatch) {
    // Set the state of the request
    dispatch(getSections());

    unauthenticatedGET('sections/').then((result) => {
      dispatch(getSectionsSuccess(result.section))
    }).catch((error) => {
      console.log(error)
    });
  }
}

export const fetchSections = () => (dispatch, getState) => {
  const state = getState();

  if (state.app.sections.length > 0) {
    return Promise.resolve(getSectionsMapper(state));
  }
  return dispatch(getAllSections());
}