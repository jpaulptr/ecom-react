import { unauthenticatedPUT } from "../api/api";
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const Logout = () => {
    return {
        type: LOGOUT,
    }
}

export const BeginLogin = (request) => {
    return {
        type: LOGIN_BEGIN,
        ...request,
    }
}

export const CompleteLogin = (user) => {
    return {
        type: LOGIN_COMPLETE,
        user
    }
}

export const ErrorLogin = (error) => {
    return {
        type: LOGIN_ERROR,
        error
    }
}

export const Login = (user) => (dispatch) => {
    dispatch(BeginLogin(user));

    unauthenticatedPUT('authentication/login',
        JSON.stringify({
            username: user.userName,
            password: user.password,
        })
    ).then((result) => {
        dispatch(CompleteLogin({ isLoggedIn: true, user: result.user }));
    }).catch((error) => {
        dispatch(ErrorLogin({ isLoggedIn: false, error }));
    })
}
