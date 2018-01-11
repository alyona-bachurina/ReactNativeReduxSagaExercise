

import * as types from './actionTypes';

export function login(username, password) {
  return { type: types.LOGIN.TRY_LOGIN, username, password }
}

export function loginSuccess(user) {
  return { type: types.LOGIN.LOGIN_SUCCESS, user }
}

export function loginFailure(reason) {
  return { type: types.LOGIN.LOGIN_FAILURE, reason }
}

export function logout() {
  return { type: types.LOGIN.LOGOUT }
}
