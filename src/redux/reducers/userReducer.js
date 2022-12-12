import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case actionTypes.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const initialSearchState = {
  loading: true,
  allSearchUsers: [],
  error: null,
};

export const searchUserReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_USER_SEARCH:
      return { ...state, loading: false };
    case actionTypes.USER_SEARCH_REQUEST:
      return { ...state, loading: true };
    case actionTypes.USER_SEARCH_SUCCESS:
      return { ...state, loading: false, allSearchUsers: action.data };
    case actionTypes.USER_SEARCH_FAIL:
      return {
        ...state,
        allSearchUsers: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
