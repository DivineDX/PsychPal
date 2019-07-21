import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PlannerMoreDetailsPatient from '../../Components/PlannerMoreDetails/PlannerMoreDetailsPatient'
import PlannerMoreDetailsPsych from '../../Components/PlannerMoreDetails/PlannerMoreDetailsPsych'


export default class PlannerMoreDetails extends Component {
    constructor() { //receive type and account completion as props
        super();
    }

    render() {
        const { navigation } = this.props;
        const type = navigation.dangerouslyGetParent().getParam('type', 'nulltype');
        const id = navigation.dangerouslyGetParent().getParam('id', 'nullid')

        if (type === 'patient') {
            return (
                <PlannerMoreDetailsPatient />
            );
        } else if (type === 'psychiatrist') {
            return <PlannerMoreDetailsPsych />
        } else {
            return <View><Text>Errors! This is not suppposed to happen</Text></View>
        }

    }
}

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})