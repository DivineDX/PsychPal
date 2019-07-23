import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import React from 'react';

const MedicalRecords = () => {
	return (
		<View>
            <Text h2>{ 'Medical Record' }</Text>
            <Text h3>{ 'Basic Information' }</Text>
                <Text h4>
                    { 'Name:' + '\n' +
                      'Age: ' + '\n' +
                      'Language: ' }
                </Text>
            <Text h3>{ 'Current Condition' }</Text>
                <Text h4>
                    { 'Medical Sypnosis / Diagnosis: ' }
                </Text>
            <Text h3>{ 'Medical History' }</Text>
                <Text h4>
                    { 'Drug Allergies: ' + '\n' +
                      'Past Condition: ' + '\n' +
                      'Family History: '}
                </Text>
            <Text h3>{ 'Medical Log' }</Text>
                {
                    dates.map((i) => {
                        return (
                            <Text h4>{ 'Appointment on ' + i }</Text>
                        )
                    })
                }
		</View>
	);
};

export default MedicalRecords;