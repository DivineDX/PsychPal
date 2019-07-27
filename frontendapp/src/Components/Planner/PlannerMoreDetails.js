import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import JitsiCallButton from '../../Components/Buttons/JitsiCallButton'
import CancelAppointment from '../CancelAppointment';

// Attn CJ: Data required here is the appointment object of that specific user
const test_appointment =
{
	"appointment_date_time": "2019-08-21 21:30:00",
	"doctor_name": "Dr. Andrea Pirlo",
	"patient_name": "Diego Costa",
	"jitsi_key": 'ssss'
}

// Attn CJ: Data required here is the specific user object
const test_user =
{
	"user_type": "Psychiatrist"
}

export default class PlannerMoreDetails extends Component {

	constructor() {
		super()
		this.state = {
			appointment: test_appointment,
			userType: test_user,
			refresh: false
		}
	}

	componentDidMount() {
		this.setState({
			appointment: this.props.navigation.state.params.appointmentObj,
			userType: this.props.navigation.state.params.userType
		})
	}

	componentDidUpdate() {
		fetch('http://localhost:3005/select * from appointment_details where patient_name = \'' +
			this.state.appointment.patient_name + "\'  and doctor_name = \'" +
			this.state.appointment.doctor_name + "\' and appointment_date_time = \'" +
			this.state.appointment.appointment_date_time + "\';"
		)
			.then(response => response.json())
			.then(data => this.setState({
				appointments: data,
				refresh: false
			}))
	}


	render() {
		if (this.state.userType == "Patient") {
			return (
				<View>
					<Text h4>{this.state.appointment.appointment_date_time}</Text>
					<Text h4>{this.state.appointment.doctor_name}</Text>
					<Text>{'\n'}</Text>
					<JitsiCallButton jitsi_key={this.state.appointment.jitsy_key} />
					<Text>{'\n'}</Text>
					<CancelAppointment appointment={this.state.appointment} />
					<Text>{this.state.appointment.cancel_reason}</Text>
				</View>
			)
		} else {
			return (
				<View>
					<Text h4>{this.state.appointment.appointment_date_time}</Text>
					<Text h4>{this.state.appointment.patient_name}</Text>
					<JitsiCallButton jitsi_key={this.state.appointment.jitsi_key} />
					<Text>{'\n'}</Text>
					<Button
						containerStyle={styles.buttonContainer}
						title='Cancel Appointment' />
					<Text>{'\n'}</Text>
					<Button
						containerStyle={styles.buttonContainer}
						title='Treatment Plan of Patient' />
					<Text>{'\n'}</Text>
					<Button
						containerStyle={styles.buttonContainer}
						title='Create Appointment Log' />
					<Text>{'\n'}</Text>
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
		marginTop: 20,
	}
})