import { combineReducers } from "redux";
import user from './userReducer';
import inputValue from './inputValueReducer';

export default combineReducers({
    user,
    inputValue,
});