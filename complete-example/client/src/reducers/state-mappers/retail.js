export const getItems = (state) => state.app.items;

export const getItemsById = (state, id) => getItems(state).find((element) => element.id === id) || {};

export const getSections = (state) => state.app.sections;

export const getSectionsById = (state, id) => getSections(state, id).find((element) => element.id === id);

export const getOrdersByUserId = (state, userId) => state.app.orders.filter((element) =>
    element.userid === userId)