'use strict';


import * as types from './ActionTypes';

export function stackoverflow_fetch() {
  return { type: types.FETCH_STACKOWERFLOW }
}

export function fetch_stackoverflow() {
  return { type: types.FETCH_STACKOWERFLOW }
}

export function fetch_stackoverflow_success(questions) {
  return { type: types.FETCH_STACKOWERFLOW_SUCCESS, questions }
}

export function fetch_stackoverflow_faliure(reason) {
  return { type: types.FETCH_STACKOWERFLOW_FAILURE, reason }
}
