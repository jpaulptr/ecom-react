export const getAuthentication = (state) => state.authentication;

export const getUserId = (state) => state.authentication.user.id;

export const getUserToken = (state) => { 
    if(state && state.authentication && state.authentication.user && state.authentication.user.token) {
        return state.authentication.user.token;
    }

    return null;
}

export const isLoggedIn = (state) => getAuthentication(state).isLoggedIn;