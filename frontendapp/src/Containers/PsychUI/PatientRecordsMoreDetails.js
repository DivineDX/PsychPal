import { View, StyleSheet } from 'react-native'
import { Button, Text, Card } from 'react-native-elements'
import React from 'react';

const PatientRecordsMoreDetails = () => {
	return (
		<View>
			<Card>
				<Button
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='Patient Details' />
				<Text>{'\n'}</Text>
				<Button
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='Treatment Plan' />
				<Text>{'\n'}</Text>
				<Button
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='Schedule next appointment' />
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