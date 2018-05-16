/**
 * Gets the Medias
 */

import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_ROOT, LOAD_MEDIAS } from 'containers/App/constants';
import { mediasLoaded, MediasLoadingError } from 'containers/App/actions';

/**
 * Medias request/response handler
 */
export function* getMedias() {
  const requestURL = `${API_ROOT}/api/Media`;

  try {
    // Call our request helper (see 'utils/request')
    const medias = yield call(request, requestURL);
    yield put(mediasLoaded(medias));
  } catch (err) {
    yield put(mediasLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* mediasData() {
  // Watches for LOAD_MEDIAS actions and calls getMedias when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MEDIAS, getMedias);
}
