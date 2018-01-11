'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
} from 'react-native';

export class LoginScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Log In
        </Text>

        <View style={styles.field}>
        <Image style={styles.icon} source={require('../../resources/user.png')}/>
        <TextInput
          style={styles.input}
          placeholder="User name"
          //onChangeText={email => this.setState({email})}
          //value={email}
        />
        </View>
        <View style={styles.field}>
        <Image style={styles.icon} source={require('../../resources/key.png')}/>
        <TextInput
          style={styles.input}
          placeholder="Password"
          //onChangeText={password => this.setState({password})}
          //value={password}
        />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: { flex: 1},

  field: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:5,
    height: 40,
    padding: 5,
    margin: 5

  },

  header: {
    fontSize: 24,
    paddingBottom: 20,
    paddingTop: 40,
    textAlign: 'center'
  },

  icon: {
    width: 28,
    height: 28
  },

  input: {
    height: 40,
    width: 200,
    paddingLeft: 10
  }
});
