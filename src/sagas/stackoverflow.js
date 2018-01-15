'use strict';

import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/ActionTypes';
import * as actions from '../actions/StackoveflowActions';


const QUESTIONS_URL = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=react-native&site=stackoverflow";


function stackoverflowSearch() {
    return fetch(QUESTIONS_URL)
        .then(response => statusHelper(response))
        .then(response => response.json())
        .catch((error) => {
            error
        });

}


function* _fetch() {

    const response = yield call(stackoverflowSearch);
    console.log(response);
    const {questions} = parseQuestions(response);
    if (response.error) {
        yield put(actions.fetch_stackoverflow_faliure(response.error));
    } else {
        yield put(actions.fetch_stackoverflow_success(questions));
    }
}


function statusHelper(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function parseQuestions(json) {

    const items = json['items'];
    const mapped = items.map(item => ({title: item['title'], id: item['question_id']}));
    return ({questions: mapped})
}

export function* watchFetchStackowerflow() {
    yield takeLatest(types.FETCH_STACKOWERFLOW, _fetch);
}

export function* watchSuccessLogin() {
    yield takeEvery(types.LOGIN_SUCCESS, _fetch);
}
