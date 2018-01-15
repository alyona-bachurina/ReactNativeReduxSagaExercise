'use strict';
import {SideMenuStack} from '../navigation/SideMenuNavigation'

const navigation = (state, action) => {
    const newState = SideMenuStack.router.getStateForAction(action, state);
    return newState || state
};

export default navigation
