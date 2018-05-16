/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_USERS_SUCCESS,
  LOAD_USERS,
  LOAD_USERS_ERROR,
  LOAD_MEDIAS_SUCCESS,
  LOAD_MEDIAS,
  LOAD_MEDIAS_ERROR,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    users: false,
    medias: false,
    posts: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'users'], false);
    case LOAD_USERS_SUCCESS:
      return state
        .setIn(['data', 'users'], action.users)
        .set('loading', false);
    case LOAD_USERS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);

    case LOAD_MEDIAS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'medias'], false);
    case LOAD_MEDIAS_SUCCESS:
      return state
        .setIn(['data', 'medias'], action.medias)
        .set('loading', false);
    case LOAD_MEDIAS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_POSTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'posts'], false);
    case LOAD_POSTS_SUCCESS:
      return state
        .setIn(['data', 'posts'], action.posts)
        .set('loading', false);
    case LOAD_POSTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
