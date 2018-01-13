'use strict';


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';


export class App extends Component {
  render() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return (<LoginScreen />);
    }else{
      return (<HomeScreen />);
    }
  }
}

const mapStateToProps = function(state) {
  const { auth } = state;

  return {
    isLoggedIn: auth.isLoggedIn,
  }
};

export default connect(mapStateToProps)(App);
