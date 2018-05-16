/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectUsers = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['data', 'users'])
);

const makeSelectMedias = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['data', 'medias'])
);

const makeSelectPosts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['data', 'posts'])
);


const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectUsers,
  makeSelectMedias,
  makeSelectPosts,
  makeSelectLocation,
};
