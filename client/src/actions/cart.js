export const ADD_ITEM_TO_CART = 'ADD_ITEM';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM';

export function addItemToCart(id, count) {
  return { type: ADD_ITEM_TO_CART, id, count }
}

export function removeItemFromCart(id, count) {
  return { type: REMOVE_ITEM_FROM_CART, id, count }
}
