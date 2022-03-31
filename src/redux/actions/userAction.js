import * as actionTypes from './actionTypes';

export function getUsers() { 
    return {
        type: actionTypes.GET_USERS_REQUESTED,
    }
    
}