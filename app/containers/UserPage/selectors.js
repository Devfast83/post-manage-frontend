/**
 * Userpage selectors
 */

import { createSelector } from 'reselect';

const selectUser = (state) => state.get('user');

const makeSelectUsername = () => createSelector(
  selectUser,
  (userState) => userState.get('username')
);

export {
  selectUser,
  makeSelectUsername,
};
