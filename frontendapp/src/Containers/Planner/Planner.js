import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PlannerPatient from '../../Components/Planner/PlannerPatient'
import PlannerPsych from '../../Components/Planner/PlannerPsych';

export default class Planner extends Component {
    constructor() { //receive type and account completion as props
        super();
    }

    render() {
        const { navigation } = this.props;
        const type = navigation.dangerouslyGetParent().getParam('type', 'nulltype');
        const id = navigation.dangerouslyGetParent().getParam('id', 'nullid')

        if (type === 'patient') {
            return (
                <PlannerPatient />
            );
        } else if (type === 'psychiatrist') {
            return <PlannerPsych />
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