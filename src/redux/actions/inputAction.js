import * as actionTypes from './actionTypes';

export function updateInputValue(data) { 
    return {
        type: actionTypes.UPDATE_INPUT_VALUE,
        payload:data
    }
}