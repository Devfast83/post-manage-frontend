/**
 * Mediapage selectors
 */

import { createSelector } from 'reselect';

const selectMedia = (state) => state.get('media');

const makeSelectUsername = () => createSelector(
  selectMedia,
  (mediaState) => mediaState.get('username')
);

export {
  selectMedia,
  makeSelectUsername,
};
