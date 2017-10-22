export const getAuthentication = (state) => state.authentication;

export const getUserId = (state) => state.authentication.user.id;

export const getUserToken = (state) => state.authentication.user.token;

export const isLoggedIn = (state) => getAuthentication(state).isLoggedIn;