import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Button, Text, Card } from 'react-native-elements'


const PatientRecordsMoreDetails = () => {
	return (
		<View>
			<Card>
				<Button
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20 }}
					title='Medical Record' />
				<Button
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20 }}
					title='Treatment Plan' />
				<Button
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20 }}
					title='Schedule Next Appointment' />
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		marginHorizontal: 20,
		marginBottom: 10,
	}
})
export default PatientRecordsMoreDetails;