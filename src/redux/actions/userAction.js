import * as actionTypes from "./actionTypes";

export const getUsers = () => {
  return {
    type: actionTypes.GET_USERS_REQUESTED,
  };
};

export const searchUsers = (users, searchText) => {
  return {
    type: actionTypes.USER_SEARCH_REQUEST,
    payload: users,
    searchText: searchText,
  };
};

export const clearUserSearched = () => {
  return {
    type: actionTypes.CLEAR_USER_SEARCH,
  };
};
