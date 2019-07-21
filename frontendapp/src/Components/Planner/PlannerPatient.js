import React from 'react';
import { ScrollView } from 'react-native'
import { Card, Button, Text } from 'react-native-elements'

const PlannerPatient = (props) => {
	return (
		<ScrollView>
			<Text h1>Patient Planner</Text>
			<Text h4>{`\n  `}Your Next Appointment</Text>
			<Card title='Your Next Appointment'>
				<Text style={{ marginBottom: 10 }}>
					{`Friday, 21 July 2019 with Dr. Milner\n6.00pm - 8.00pm`}
				</Text>
				<Button
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='More details' />
			</Card>
			<Text h4>{`\n  `}Your Past Appointments</Text>
			<Card>
				<Text style={{ marginBottom: 10 }}>
					{`Friday, 14 July 2019 with Dr. Ramsey\n6.00pm - 8.00pm`}
				</Text>
				<Button
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='More details' />
			</Card>
			<Card>
				<Text style={{ marginBottom: 10 }}>
					{`Friday, 6 July 2019 with Dr. Lacazette\n6.00pm - 8.00pm`}
				</Text>
				<Button
					backgroundColor='#03A9F4'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='More details' />
			</Card>
		</ScrollView>

	);
};

export default PlannerPatient;