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
    console.log(1);
    yield put(actions.loginFailure("User name can not be empty"));
    return
  }

  if (password=='') {
    console.log(2);
    yield put(actions.loginFailure("Password can not be empty"));
    return
  }

  if (username == 'Steven' && password == '1111111'  || username == "Ann" && password == '222222') {
    const {user} = {"name": username}
    yield put(actions.loginSuccess(user));
    console.log(3);
  }else{
    yield put(actions.loginFailure("Wrong email or password"));
    console.log(4);
  }
  console.log(5);
}

export function* watchLogin() {
  yield takeEvery(types.TRY_LOGIN, _login);
}
