/**
 * Gets the posts
 */

import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_ROOT, LOAD_POSTS } from 'containers/App/constants';
import { postsLoaded, postsLoadingError } from 'containers/App/actions';

/**
 * Posts request/response handler
 */
export function* getPosts() {
  const requestURL = `${API_ROOT}/api/posts?filter={"include": ["CustomUser", "Media"]}`;

  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    yield put(postsLoaded(posts));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* postsData() {
  // Watches for LOAD_POSTS actions and calls getPosts when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_POSTS, getPosts);
}
