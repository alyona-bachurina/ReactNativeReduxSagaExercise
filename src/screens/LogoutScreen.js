'use strict';

import React, { Component } from 'react'
import { StyleSheet, View, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import * as loginActions from '../actions/LoginActions';


export class LogoutScreen extends Component {

  onlogout = () => {
    this.props.do_logout()
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Good bye</Text>
        <Button name="_" onPress={this.onlogout} style={styles.button} title="Log Out"/>
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

const mapStateToProps = (state, ownProps) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
    return {
        do_logout: () => { dispatch(loginActions.logout()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen);
