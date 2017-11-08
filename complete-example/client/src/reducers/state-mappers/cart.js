export const getCart = (state) => state.cart.cart;

export const getOrderConfirmation = (state) => state.cart.confirmationNumber;

export const getCartCount = (state) => getCart(state).reduce((sum, element) =>
    sum += element.count
    , 0);