import {
    REMOVE_ITEM_FROM_CART,
    ADD_ITEM_TO_CART,
    ADD_SHIPPING_PAYMENT_INFORMATION,
    ORDER_IN_PROCESS,
    ORDER_COMPLETE,
    ORDER_FAILED,
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
        case ADD_SHIPPING_PAYMENT_INFORMATION:
            return addShippingAndPayment(state, action);
        case ORDER_IN_PROCESS:
            return orderInProcess(state, action);
        case ORDER_COMPLETE:
            return orderComplete(state, action);
        case ORDER_FAILED:
            return orderError(state, action);
        default:
            return state
    }
}

export default app;

const addShippingAndPayment = (state, action) => Object.assign({}, state, {
    address: action.address,
    payment: action.payment,
})

const orderInProcess = (state, action) => Object.assign({}, state, {
    orderInProcess: true,
});

const orderComplete = (state, action) => Object.assign({}, state, {
    orderInProcess: false,
    cart: [],
    address: null,
    payment: null,
    confirmationNumber: action.confirmationNumber,
});

const orderError = (state, action) => Object.assign({}, state, {
    orderInProcess: false,
    payment: null,
});

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
        newState.cart.push({id: action.id, count: action.count});
    }

    return newState;
}