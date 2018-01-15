'use strict';

import React, {Component} from 'react'
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {List, ListItem} from "react-native-elements";

export class StackoverflowScreen extends Component {

    render() {

        console.log(this.props.questions[0]);

        return (
            <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
                <FlatList data={this.props.questions} renderItem={({item}) => (
                    <ListItem
                        title={item.title}
                        containerStyle={{borderBottomWidth: 0}}
                    />
                )}
                          keyExtractor={item => item.id}
                />
            </List>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.stackoverflow.questions
    }
};

export default connect(mapStateToProps)(StackoverflowScreen);
