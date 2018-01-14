'use strict';

import React, { Component } from 'react'
import { StyleSheet, View, Image, Button, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import * as loginActions from '../actions/LoginActions';
import { bindActionCreators } from 'redux';

export class LoginScreen extends Component {

  state = {
      username: '',
      password: ''
  };

  onlogin = () => {
    this.props.do_login(this.state.username, this.state.password)
  };


  render() {

    const { username, password } = this.state;

    let error;

    const { failureReason } = this.props.failure

    if ( failureReason !== '') {
      error = <Text style={{color: 'red', textAlign:'center'}}>{failureReason}</Text>;
    }

    return (

      <View style={styles.container}>
        <Text style={styles.header}>
          Wellcome
        </Text>
        {error}
        <View style={styles.field}>
        <Image style={styles.icon} source={require('../../resources/user.png')}/>
        <TextInput
          style={styles.input}
          placeholder="User name"
          onChangeText={username => this.setState({username})}
          value={username}
        />
        </View>
        <View style={styles.field}>
        <Image style={styles.icon} source={require('../../resources/key.png')}/>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={password}
        />
        </View>

        <Button name="_" onPress={this.onlogin} style={styles.button} title="Log In"/>
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

const mapStateToProps = (state, ownProps) => {
  return state.auth
}

const mapDispatchToProps = (dispatch) => {
    return {
        do_login: (username, password) => { dispatch(loginActions.login(username, password)); }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
