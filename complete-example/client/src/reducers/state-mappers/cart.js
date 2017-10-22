export const getCart = (state) => state.cart.cart;

export const getCartCount = (state) => getCart(state).reduce((sum, element) =>
    sum += element.count
    , 0);