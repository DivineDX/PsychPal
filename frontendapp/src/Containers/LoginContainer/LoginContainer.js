import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from 'native-base';
import InputBox from './InputBox';
import LoginButton from '../../Components/Buttons/LoginButton';

export default class LoginContainer extends Component {

    constructor() {
        super();
        this.state = {
            showPass: false,
            press: false,
        }
    }

    toggleShowPass = () => {
        const curr = this.state.showPass;
        this.setState({ showPass: !curr });
    }

    render() {
        // const { navigation } = this.props;
        return (
            <View style={styles.loginContainer}>
                <InputBox placeholderText={'Username'} iconName={'person'} />
                <InputBox
                    placeholderText={'Password'}
                    iconName={'lock'}
                    showPass={this.state.showPass}
                    toggle={this.toggleShowPass} />
                <LoginButton buttonText={'Login'} />
                <Text style={{ color: 'blue', marginTop: 10 }}>
                    Don't have an account?
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})