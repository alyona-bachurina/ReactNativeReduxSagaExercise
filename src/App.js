/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';


export default class App extends Component<{}> {
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
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
  }
};

//connect(mapStateToProps)(App);
