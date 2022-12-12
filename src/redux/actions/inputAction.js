import * as actionTypes from "./actionTypes";

export const updateInputValue = (data) => {
  return {
    type: actionTypes.UPDATE_INPUT_VALUE,
    payload: data,
  };
};
