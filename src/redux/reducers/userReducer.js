import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [],
    loading: false,
    error:null
}

const userReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case actionTypes.GET_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading:false,
            }
        case actionTypes.GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error:action.error,
            }
        default:
            return state;
    }
}
export default userReducer;