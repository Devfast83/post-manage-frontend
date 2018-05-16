/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const API_ROOT = 'http://localhost:9000';

export const LOAD_USERS = 'boilerplate/App/LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'boilerplate/App/LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'boilerplate/App/LOAD_USERS_ERROR';
export const LOAD_MEDIAS = 'boilerplate/App/LOAD_MEDIAS';
export const LOAD_MEDIAS_SUCCESS = 'boilerplate/App/LOAD_MEDIAS_SUCCESS';
export const LOAD_MEDIAS_ERROR = 'boilerplate/App/LOAD_MEDIAS_ERROR';
export const LOAD_POSTS = 'boilerplate/App/LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'boilerplate/App/LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_ERROR = 'boilerplate/App/LOAD_POSTS_ERROR';
export const DEFAULT_LOCALE = 'en';
