import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() { //receive type and account completion as props
        super();
    }

    render() {
        const { navigation } = this.props;
        const userID = navigation.getParam('userID', 'NO-ID');
        const type = navigation.getParam('type', 'patient');
        const particulars = navigation.getParam('particulars', false);
        const details = navigation.getParam('details', false);
        return (<Text>Home</Text>);
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})