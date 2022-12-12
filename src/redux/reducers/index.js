import { combineReducers } from "redux";
import { userReducer, searchUserReducer } from "./userReducer";
import inputValue from "./inputValueReducer";

export default combineReducers({
  searchUserReducer,
  userReducer,
  inputValue,
});
