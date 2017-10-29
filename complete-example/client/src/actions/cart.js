import { authenticatedPUT } from '../api/api'
import { getUserId, getUserToken } from '../reducers/state-mappers/authentication';
import { getCart } from '../reducers/state-mappers/cart';

export const ADD_ITEM_TO_CART = 'ADD_ITEM';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM';
export const ADD_SHIPPING_ADDRESS = 'ADD_SHIPPING_ADDRESS';
export const ADD_PAYMENT_INFORMATION = 'ADD_PAYMENT_INFORMATION';
export const ADD_SHIPPING_PAYMENT_INFORMATION = 'ADD__SHIPPING_PAYMENT_INFORMATION';
export const ORDER_IN_PROCESS = 'ORDER_IN_PROCESS';
export const ORDER_COMPLETE = 'ORDER_COMPLETE';
export const ORDER_FAILED = 'ORDER_FAILED';

export function addItemToCart(id, count) {
  return { type: ADD_ITEM_TO_CART, id, count }
}

export function removeItemFromCart(id, count) {
  return { type: REMOVE_ITEM_FROM_CART, id, count }
}

export function addShippingAndPaymentInformation(address, payment) {
  return { type: ADD_SHIPPING_PAYMENT_INFORMATION, address, payment }
}

export function addShippingInformation(address) {
  return { type: ADD_SHIPPING_ADDRESS, address }
}

export function addPaymentInformation(payment) {
  return { type: ADD_PAYMENT_INFORMATION, payment }
}

export function placeOrder(address, payment) {
  return (dispatch, getState) => {
    const state = getState();

    dispatch(sendOrder());

    authenticatedPUT(`orders/${getUserId(state)}`,
      getUserToken(state),
      {
        address,
        payment,
        cart: getCart(state)
      }).then((result) => {
        dispatch(orderComplete(result.confirmationNumber));

      }).catch((error) => {
        dispatch(orderError(error));

      });
  }
}

function sendOrder() {
  return { type: ORDER_IN_PROCESS }
}

function orderComplete(confirmationNumber) {
  return { type: ORDER_COMPLETE, confirmationNumber }
}

function orderError(error) {
  return { type: ORDER_FAILED, error }
}