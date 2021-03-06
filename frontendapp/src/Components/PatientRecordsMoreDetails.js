import { View, StyleSheet } from 'react-native'
import { Button, Text, Card } from 'react-native-elements'
import React from 'react';

const PatientRecordsMoreDetails = () => {
	return (
		<View>
			<Card>
				<Button
					type='outline'
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='Medical Record' />
				<Text>{'\n'}</Text>
				<Button
					type='outline'
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='Treatment Plan' />
				<Text>{'\n'}</Text>
				<Button
					type='outline'
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
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