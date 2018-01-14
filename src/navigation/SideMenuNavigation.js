'use strict';


import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Image } from 'react-native';
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import StackoverflowScreen from '../screens/StackoverflowScreen'
import LogoutScreen from '../screens/LogoutScreen'

const MenuButton = (navigation) => (
  <Button title="≣" onPress={ () => navigation.navigate('DrawerOpen') }/>
);

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: MenuButton(navigation)
    })
  }
});

const StackoverflowStack = StackNavigator({
  Stackoverflow: {
    screen: StackoverflowScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Stackoverflow',
      headerLeft: MenuButton(navigation)
    })
  }
});

const LogoutStack = StackNavigator({
  Logout: {
    screen: LogoutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Logout',
      headerLeft: MenuButton(navigation)
    })
  }
});


export const SideMenuStack = DrawerNavigator({
  homeScreen: { screen: HomeStack},
  stackoverflowScreen: { screen: StackoverflowStack},
  logoutScreen: { screen: LogoutStack }
})

const SideMenuNavigation = ({ dispatch, nav }) => (
  <SideMenuStack navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

SideMenuNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(SideMenuNavigation);
