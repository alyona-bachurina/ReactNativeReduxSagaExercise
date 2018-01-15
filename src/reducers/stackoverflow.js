'use strict';


import * as types from '../actions/ActionTypes';

const initialState = {
    isLoading: false,
    questions: [],
    failure: ""
};

export default function stackoverflow(state = initialState, action) {

    switch (action.type) {

        case types.FETCH_STACKOWERFLOW:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case types.FETCH_STACKOWERFLOW_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                questions: action.questions,
            });
        case types.LOGIN_FAILURE:

            return Object.assign({}, state, {
                isLoading: false,
                failure: action.reason,
                questions: []
            });
        default:
            return state;
    }
}
