'use strict';

import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';


export class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Hello, {this.props.username}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {flex: 1},

    header: {
        fontSize: 24,
        paddingBottom: 20,
        paddingTop: 40,
        textAlign: 'center'
    },
});

const mapStateToProps = function (state) {
    const {auth} = state;

    return {
        username: auth.user.name,
    }
};

export default connect(mapStateToProps)(HomeScreen);
