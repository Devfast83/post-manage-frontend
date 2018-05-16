/**
 * Gets the users
 */

import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_ROOT, LOAD_USERS } from 'containers/App/constants';
import { usersLoaded, usersLoadingError } from 'containers/App/actions';

/**
 * Users request/response handler
 */
export function* getUsers() {
  const requestURL = `${API_ROOT}/api/CustomUsers`;

  try {
    // Call our request helper (see 'utils/request')
    const users = yield call(request, requestURL);
    yield put(usersLoaded(users));
  } catch (err) {
    yield put(usersLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* usersData() {
  // Watches for LOAD_USERS actions and calls getUsers when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_USERS, getUsers);
}
