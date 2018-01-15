'use strict';


import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import stackoverflow from './stackoverflow';

const rootReducer = combineReducers({
    nav:navigation, auth, stackoverflow
});

export default rootReducer;
