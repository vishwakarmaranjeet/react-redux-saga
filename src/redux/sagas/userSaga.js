import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getUser } from '../api/users';

function* fetchUsers() { 
    try {
        const users = yield call(getUser);
        if (users && users.length > 0) {
            yield put({ type: actionTypes.GET_USERS_SUCCESS, users: users });
        } else { 
            yield put({ type: actionTypes.GET_USERS_FAILED, error: true });
        }
        
    } catch (e) { 
        yield put({ type: actionTypes.GET_USERS_FAILED, error: true });
    }
}

function* userSaga() { 
    yield takeEvery(actionTypes.GET_USERS_REQUESTED, fetchUsers);
}

export default userSaga;