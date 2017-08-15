import {
    DISPLAY_ITEM,
    DISPLAY_SECTION,
    GET_ITEM,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAILURE,
    GET_ORDERS,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE
} from '../actions/retail'

const initialState = {
    processState: '',
    sections: [{
        id: 'womens',
        title: 'Women\'s',
        description: 'The best in clothing',
        items: [
            {
                id: '1',
                description: 'Shoe 1',
                caption: 'New shoe',
                imageUrl: ''
            },
            {
                id: '2',
                description: 'Shoe 2',
                caption: 'New shoe 2',
                imageUrl: ''
            },
            {
                id: '123',
                description: 'Shoe 123',
                caption: 'New shoe 124',
                imageUrl: ''
            }
        ]
    },
    {
        id: 'mens',
        title: 'Men\'s',
        description: 'Summer sale is here',
        items: [
            {
                id: '3',
                description: 'Shoe',
                caption: 'New shoe',
                imageUrl: ''
            },
            {
                id: '4',
                description: 'Three Button Suit',
                caption: 'Latest in 3 buttons',
                imageUrl: ''
            }
        ]
    },
    {
        id: 'home',
        title: 'Home Furnishings',
        description: 'Create your ideal home',
        items: [
            {
                id: '5',
                description: 'Jones Sofa',
                caption: 'Comfortable red leather sofa',
                imageUrl: ''
            },
            {
                id: '6',
                description: 'Wing Back Chair',
                caption: 'Relax in style',
                imageUrl: ''
            }

        ]
    }],
    items: [],
    orders: [],
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
