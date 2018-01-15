'use strict';


import * as types from '../actions/ActionTypes';

const initialState = {
    isLoggedIn: false,
    user: {},
    failure: '',
};

export default function auth(state = initialState, action) {

    switch (action.type) {

        case types.TRY_LOGIN:
            console.log("case types.TRY_LOGIN:");
            return Object.assign({}, state, {
                isLoggedIn: false,
            });
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                user: action.user,
            });
        case types.LOGIN_FAILURE:

            return Object.assign({}, state, {
                isLoggedIn: false,
                failure: action.reason,
            });
        case types.LOGOUT:
            return initialState;
        default:
            return state;
    }
}
