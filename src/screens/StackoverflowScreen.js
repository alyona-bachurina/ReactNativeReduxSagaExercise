'use strict';

import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';


export default class StackoverflowScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Stackoverflow</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
