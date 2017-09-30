import {
    DISPLAY_ITEM,
    DISPLAY_SECTION,
    GET_ITEM,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAILURE,
    GET_ORDERS,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE,
    GET_SECTIONS,
    GET_SECTIONS_SUCCESS,
    GET_SECTIONS_FAILURE,
} from '../actions/retail'

const initialState = {
    processState: '',
    sections: [],
    items: [],
    orders: []
}

function app(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_SECTION:
            return state.sections.find((ele) => ele.id === action.id)
        case DISPLAY_ITEM:
            return state.items.find((ele) => ele.id === action.id)
        case GET_ITEM:
            return getItem(state, action);
        case GET_ITEM_SUCCESS:
            return setItem(state, action);
        case GET_ITEM_FAILURE:
            return ''
        case GET_ORDERS:
            return Object.assign({}, state, { requestingOrders: true })
        case GET_ORDERS_SUCCESS:
            return Object.assign({}, state, { requestingOrders: false, orders: action.orders })
        case GET_ORDERS_FAILURE:
            return Object.assign({}, state, { requestingOrders: false })
        case GET_SECTIONS:
            return Object.assign({}, state, { requestingSections: true })
        case GET_SECTIONS_SUCCESS:
            return Object.assign({}, state, { requestingSections: false, sections: action.sections })
        case GET_SECTIONS_FAILURE:
            return Object.assign({}, state, { requestingSections: false })
        default:
            return state
    }
}

export default app;


// Reducers...
const setItem = (state, action) => {
    const newState = Object.assign({}, state, {})

    // The action will have the values that were returned by the service
    newState.items.push(action.item);

    newState.processState = '';

    return newState;
}

const getItem = (state, action) => {
    const newState = Object.assign({}, state, {
        processState: action.type,
    })

    return newState;
};
