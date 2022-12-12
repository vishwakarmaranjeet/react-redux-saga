import { call, put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getUser } from "../api/users";

function* fetchUsers() {
  try {
    const users = yield call(getUser);
    if (users && users.length > 0) {
      yield put({ type: actionTypes.GET_USERS_SUCCESS, data: users });
    } else {
      yield put({ type: actionTypes.GET_USERS_FAILED, error: true });
    }
  } catch (e) {
    yield put({ type: actionTypes.GET_USERS_FAILED, error: true });
  }
}

function* searchUsers(users) {
  try {
    const filteredData =
      users &&
      users.payload.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(users.searchText.toLowerCase());
      });
    if (filteredData.length > 0) {
      yield put({ type: actionTypes.USER_SEARCH_SUCCESS, data: filteredData });
    } else {
      yield put({
        type: actionTypes.USER_SEARCH_FAIL,
        error: "No records found!",
      });
    }
  } catch (e) {
    yield put({
      type: actionTypes.USER_SEARCH_FAIL,
      error: "No records found!",
    });
  }
}

function* userSaga() {
  yield takeEvery(actionTypes.GET_USERS_REQUESTED, fetchUsers);
  yield takeEvery(actionTypes.USER_SEARCH_REQUEST, searchUsers);
}

export default userSaga;
