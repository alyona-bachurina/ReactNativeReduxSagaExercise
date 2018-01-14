'use strict';


import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';

const rootReducer = combineReducers({
    nav:navigation, auth
});

export default rootReducer;
