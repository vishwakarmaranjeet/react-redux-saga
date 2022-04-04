import * as actionTypes from '../actions/actionTypes';

const initialState = {
    inputValue: ''
}

const inputValueReducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionTypes.UPDATE_INPUT_VALUE:
            return { ...state, inputValue:action.payload }
        default :
            return state
    }
}

export default inputValueReducer;