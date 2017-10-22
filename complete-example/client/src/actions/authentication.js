export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGIN_ERROR = 'LOGIN_ERROR';

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

    return fetch('http://localhost:8000/authentication/login', {
        method: 'PUT',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            username: user.userName,
            password: user.password,
        }),
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then((result) => {
        dispatch(CompleteLogin({ isLoggedIn: true, user: result.user }));
    }).catch((error) => {
        dispatch(ErrorLogin({ isLoggedIn: false, error }));
    })
}