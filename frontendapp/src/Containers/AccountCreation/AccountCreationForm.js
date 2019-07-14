import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Container, Header } from 'native-base';

export default class AccountCreationForm extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <Container style = {styles.container}>
                <Text>Hello World</Text>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})