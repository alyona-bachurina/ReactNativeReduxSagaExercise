'use strict';


import * as types from './ActionTypes';

export function login(username, password) {
  return { type: types.TRY_LOGIN, username, password }
}

export function loginSuccess(user) {
  return { type: types.LOGIN_SUCCESS, user }
}

export function loginFailure(reason) {
  return { type: types.LOGIN_FAILURE, reason }
}

export function logout() {
  return { type: types.LOGOUT }
}
