import { call, put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getEmployee } from "../api/employee";

function* fetchEmployees(action) {
  const { callback } = action;
  try {
    const response = yield call(getEmployee);
    if(callback && typeof callback === "function"){
      if(response?.data){
        callback({ success: true, data: response?.data });
      } else {
        callback({ success: false, error: "Something went wrong" });
      }
    }
  } catch (error) {
    console.log(error);
    yield put({ type: actionTypes.GET_EMPLOYEES_ERROR, error});
    if(callback && typeof callback === "function"){
      callback({ success: false, error: "Something went wrong" });
    }
  }
}

function* employeeSaga() {
  yield takeEvery(actionTypes.GET_EMPLOYEES_REQUEST, fetchEmployees);
}

export default employeeSaga;
