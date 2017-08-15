import {
    REMOVE_ITEM_FROM_CART,
    ADD_ITEM_TO_CART,
} from '../actions/cart'

const initialState = {
    processState: '',
    cart: [],
}

function app(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return addToCart(state, action);
        case REMOVE_ITEM_FROM_CART:
            return removeFromCart(state, action);
        default:
            return state
    }
}

export default app;

const removeFromCart = (state, action) => {
    const newState = Object.assign({}, state, {
        cart: [
            ...state.cart
        ]
    });

    newState.cart = newState.cart.filter((element) => element.id !== action.id);

    return newState;
}

const addToCart = (state, action) => {
    // find any of the item in the cart and update the count
    const newState = Object.assign({}, state, {
        cart: [
            ...state.cart,
        ]
    });

    let item = newState.cart.find((element) => element.id === action.id);

    if (item) {
        item.count += action.count;
    }
    else {
        newState.cart.push(action);
    }

    return newState;
}