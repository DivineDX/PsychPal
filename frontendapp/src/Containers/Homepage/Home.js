import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PersonalParticulars from '../AccountCreation/PersonalParticulars';
import PatientForm from '../AccountCreation/PatientForm';
import PsychiatristForm from '../AccountCreation/PsychiatristForm';

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

        if (!particulars) { //particulars not filled
            return (
                // navigation.navigate('PersonalParticulars', {
                //     userID: userID,
                //     type: type,
                // })
                <PersonalParticulars/>
            );
        } else if (!details) { //details not filled
            if (type === 'patient') {
                return (<PatientForm />);
            } else {
                return (<PsychiatristForm />);
            }
        } else { //All okay, will redirect to main <HomeScreen>
            return (
                <View>
                    <Text>To be filled with the normal home screen</Text>
                </View>
            );

        }
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})