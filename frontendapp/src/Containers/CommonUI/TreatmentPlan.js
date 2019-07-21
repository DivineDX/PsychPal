import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TreatmentPlanPatient from '../../Components/TreatmentPlan/TreatmentPlanPatient'
import TreatmentPlanPatient from '../../Components/TreatmentPlan/TreatmentPlanPsych'

export default class TreatmentPlan extends Component {
    constructor() { //receive type and account completion as props
        super();
    }

    render() {
        const { navigation } = this.props;
        const type = navigation.dangerouslyGetParent().getParam('type', 'nulltype');
        const id = navigation.dangerouslyGetParent().getParam('id', 'nullid')

        if (type === 'patient') {
            return (
                <TreatmentPlanPatient />
            );
        } else if (type === 'psychiatrist') {
            return <TreatmentPlanPysch />
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