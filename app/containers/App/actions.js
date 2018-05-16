/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_MEDIAS,
  LOAD_MEDIAS_SUCCESS,
  LOAD_MEDIAS_ERROR,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR
} from './constants';

/**
 * Load the users, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_USERS
 */
export function loadUsers() {
  return {
    type: LOAD_USERS,
  };
}

/**
 * Dispatched when the users are loaded by the request saga
 *
 * @param  {array} users The users data
 *
 * @return {object}      An action object with a type of LOAD_USERS_SUCCESS passing the users
 */
export function usersLoaded(users) {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
}

/**
 * Dispatched when loading the users fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_USERS_ERROR passing the error
 */
export function usersLoadingError(error) {
  return {
    type: LOAD_USERS_ERROR,
    error,
  };
}

/**
 * Load the medias, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_MEDIAS
 */
export function loadMedias() {
  return {
    type: LOAD_MEDIAS,
  };
}

/**
 * Dispatched when the medias are loaded by the request saga
 *
 * @param  {array} medias The medias data
 *
 * @return {object}      An action object with a type of LOAD_MEDIAS_SUCCESS passing the medias
 */
export function mediasLoaded(medias) {
  return {
    type: LOAD_MEDIAS_SUCCESS,
    medias,
  };
}

/**
 * Dispatched when loading the medias fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_MEDIAS_ERROR passing the error
 */
export function meidasLoadingError(error) {
  return {
    type: LOAD_MEDIAS_ERROR,
    error,
  };
}

//===============
/**
 * Load the post, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_POSTS
 */
export function loadPosts() {
  return {
    type: LOAD_POSTS,
  };
}

/**
 * Dispatched when the posts are loaded by the request saga
 *
 * @param  {array} posts The posts data
 *
 * @return {object}      An action object with a type of LOAD_POSTS_SUCCESS passing the posts
 */
export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}

/**
 * Dispatched when loading the posts fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_POSTS_ERROR passing the error
 */
export function postsLoadingError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error,
  };
}
