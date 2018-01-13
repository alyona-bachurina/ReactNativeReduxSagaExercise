'use strict';

import { fork } from 'redux-saga/effects'

import {watchLogin} from './login';

export default function* root() {
  yield fork(watchLogin)
}
