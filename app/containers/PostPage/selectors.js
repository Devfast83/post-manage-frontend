/**
 * Postpage selectors
 */

import { createSelector } from 'reselect';

const selectPost = (state) => state.get('post');

const makeSelectUsername = () => createSelector(
  selectPost,
  (postState) => postState.get('username')
);

export {
  selectPost,
  makeSelectUsername,
};
