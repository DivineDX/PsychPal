import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Account extends Component {
    constructor() { //receive type and account completion as props
        super();
    }

    render() {
        return (
            <View>
                <Text>This is the account page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
})