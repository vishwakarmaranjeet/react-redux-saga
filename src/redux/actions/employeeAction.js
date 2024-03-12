import * as actionTypes from "./actionTypes";

export const getEmployeesList = (callback) => {
    return {
      type: actionTypes.GET_EMPLOYEES_REQUEST,
      callback
    }
};