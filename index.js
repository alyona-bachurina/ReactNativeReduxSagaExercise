'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux';

export default class Main extends Component{

  constructor() {
    super();
    this.state = {
      store: configureStore()
    };
  }

  render() {
      return (
          <Provider store={this.state.store}>
            <App />
          </Provider>
        )
  }
}

AppRegistry.registerComponent('Exercise', () => Main);
