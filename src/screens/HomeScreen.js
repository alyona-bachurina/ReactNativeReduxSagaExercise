'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export class HomeScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text >
          Hello, Steve
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: { flex: 1},

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    alignSelf: 'center',
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
