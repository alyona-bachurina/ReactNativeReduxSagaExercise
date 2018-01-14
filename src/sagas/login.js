'use strict';

import { AsyncStorage } from 'react-native';
import { call, put, select, take, takeEvery, fork} from 'redux-saga/effects';
import { LoginActions } from '../actions/LoginActions';
import * as types from '../actions/ActionTypes';
import * as actions from '../actions/LoginActions'

function *_login(){
  // let's implement some stub logic here
  const { username, password } = (yield take(types.TRY_LOGIN));

  console.log("username, password:",username, password);

  if (username=='') {
    yield put(actions.loginFailure("User name can not be empty"));
    return
  }

  if (password=='') {
    yield put(actions.loginFailure("Password can not be empty"));
    return
  }

  if (username == 'Steven' && password == '1111111'  || username == "Ann" && password == '222222') {
    console.log({ name : username});
    yield put(actions.loginSuccess({ name : username}));

  }else{
    yield put(actions.loginFailure("Wrong user name or password"));
  }
}

export function* watchLogin() {
  yield takeEvery(types.TRY_LOGIN, _login);
}
