'use strict';

import { fork } from 'redux-saga/effects'

import {watchLogin} from './login';
import * as stackoverflow from './stackoverflow';

export default function* root() {
  yield fork(watchLogin);
  yield fork(stackoverflow.watchFetchStackowerflow);
  yield fork(stackoverflow.watchSuccessLogin);
}
