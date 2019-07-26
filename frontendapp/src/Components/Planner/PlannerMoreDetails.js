import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import JitsiCallButton from '../../Components/Buttons/JitsiCallButton'

// Attn CJ: Data required here is the appointment object of that specific user
const test_appointment =
{
	"appointment_date_time": "2019-08-21 21:30:00",
	"doctor_name": "Dr. Andrea Pirlo",
	"patient_name": "Diego Costa",
	"jitsi_key": "gfsihdisfhnud",
	"cancel_reason": 'Hi Diego, I find you too rude. Please find another doctor, thank you.'
}

// Attn CJ: Data required here is the specific user object
const test_user =
{
	"user_type": "Psychiatrist"
}

export default class PlannerMoreDetails extends Component {

	constructor(props) {
		super(props)
		this.state = {
			appointment: test_appointment,
			user: test_user
		}
	}

	componentDidMount() {
		// for CJ
	}

	render() {
		if (this.state.user.user_type == "Patient") {
			return (
				<View>
					<Text h4>{this.state.appointment.appointment_date_time}</Text>
					<Text h4>{this.state.appointment.doctor_name}</Text>
					<JitsiCallButton jitsi_key={this.state.appointment.jitsi_key} />
					<Button
						containerStyle={styles.buttonContainer}
						title='Cancel Appointment' />
					<Text>{this.state.appointment.cancel_reason}</Text>
				</View>
			)
		} else {
			return (
				<View>
					<Text h4>{this.state.appointment.appointment_date_time}</Text>
					<Text h4>{this.state.appointment.patient_name}</Text>
					<JitsiCallButton jitsi_key={this.state.appointment.jitsi_key} />
					<Button
						containerStyle={styles.buttonContainer}
						title='Cancel Appointment' />
					<Button
						containerStyle={styles.buttonContainer}
						title='Treatment Plan of Patient' />
					<Button
						containerStyle={styles.buttonContainer}
						title='Create Appointment Log' />
					<Button
						containerStyle={styles.buttonContainer}
						title='Schedule Next Appointment' />
					<Text>{this.state.appointment.cancel_reason}</Text>
				</View>
			)
		}

	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: 275,
		marginHorizontal: 75,
		marginTop: 20
	}
})