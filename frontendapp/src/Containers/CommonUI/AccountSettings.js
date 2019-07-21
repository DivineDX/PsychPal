import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Account extends Component {
    constructor() { //receive type and account completion as props
        super();
    }

    render() {
        return (
            <View>
                <Text>Upload Profile Picture</Text>
                <Text>Remove Profile Picture</Text>
                <Text>Change Password</Text>
                <Text>Sign Out</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})
