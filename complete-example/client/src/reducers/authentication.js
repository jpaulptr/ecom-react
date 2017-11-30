import {
    LOGIN_BEGIN,
    LOGIN_COMPLETE,
    LOGIN_ERROR,
    LOGOUT,
} from '../actions/authentication';

const initialState = {
    isLoggedIn: false,
    user: {},
    isLoggingIn: false,
}

function app(state = initialState, action) {
    switch (action.type) {
        case LOGIN_BEGIN:
            return beginLogin(state,action);
        case LOGIN_COMPLETE:
            return endLogin(state,action);
        case LOGIN_ERROR:
            return errorLogin(state, action);
        case LOGOUT:
            return logout(state, action);
        default:
            return state
    }
};

export default app;

// Reducers...
const beginLogin = (state, action) => Object.assign({}, state, {
    isLoggingIn: true,
    hasLoginError: false,
});

const endLogin = (state, action) => Object.assign({}, state, {
    isLoggingIn: false,
    user: action.user.user,
    isLoggedIn: action.user.isLoggedIn,
});

const errorLogin =(state, action) => Object.assign({}, state, {
    isLoggingIn: false,
    isLoggedIn: false,
    user: null,
    hasLoginError: true,
});

const logout = (state, action) => Object.assign({}, state, {
    isLoggingIn: false,
    isLoggedIn: false,
    user: null,
});
