'use strict';


import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import SideMenuNavigation from './navigation/SideMenuNavigation'


export class App extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return (<SideMenuNavigation/>);
        } else {
            return (<LoginScreen/>);
        }
    }
}

const mapStateToProps = function (state) {

    return {
        isLoggedIn: state.auth.isLoggedIn,
        nav: state.nav
    }
};

export default connect(mapStateToProps)(App);
