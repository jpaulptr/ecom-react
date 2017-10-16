export const getAuthentication = (state) => state.authentication;

export const getUserId = (state) => state.authentication.user.id;

export const isLoggedIn = (state) => getAuthentication(state).isLoggedIn;