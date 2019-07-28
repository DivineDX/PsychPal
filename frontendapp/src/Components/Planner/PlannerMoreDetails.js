import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import JitsiCallButton from '../../Components/Buttons/JitsiCallButton'
import CancelAppointment from '../CancelAppointment'
import connection from '../../../DatabaseInteraction/Connection'

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
		fetch('http://' + connection.connection + ':3005/select * from appointment_details where patient_name = \'' +
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
		const dateTime = new Date(this.state.appointment.appointment_date_time).toLocaleString();

		if (this.state.userType == "Patient") {
			console.log("DateTime in More details", dateTime);
			console.log("Type: ", typeof dateTime);
			return (
				<View>
					{/* <Text style={styles.headings}>{dateTime}</Text>
					<View style={{flexDirection: 'row'}}>
						<Text style={styles.headings}>Doctor:</Text>
						<Text style={styles.nameText}> {this.state.appointment.doctor_name}</Text>	
					</View> */}
					<Text style={styles.headings}>{dateTime}</Text>
					<Text style={styles.headings}>Doctor: {this.state.appointment.doctor_name}</Text>
					<View style={styles.wholeContainer}>
						<JitsiCallButton jitsi_key={this.state.appointment.jitsy_key} />
						<CancelAppointment appointment={this.state.appointment} />
					</View>

					<Text>{this.state.appointment.cancel_reason}</Text>
				</View>
			)
		} else {
			return (
				<View>
					{/* <Text style={styles.headings}>{this.state.appointment.appointment_date_time}</Text>
					<Text style={styles.headings}>{this.state.appointment.patient_name}</Text> */}

					<Text style={styles.headings}>{dateTime}</Text>
					<View style={{flexDirection: 'row'}}>
						<Text style={styles.headings}>Patient:</Text>
						<Text style={styles.nameText}> {this.state.appointment.patient_name}</Text>	
					</View>

					<View style={styles.wholeContainer}>
						<JitsiCallButton jitsi_key={this.state.appointment.jitsi_key} />
						<Button
							type='outline'
							containerStyle={styles.buttonContainer}
							title='Cancel Appointment' />
						<Button
							type='outline'
							containerStyle={styles.buttonContainer}
							title='Treatment Plan of Patient' />
						<Button
							type='outline'
							containerStyle={styles.buttonContainer}
							title='Create Appointment Log' />
						<Button
							type='outline'
							containerStyle={styles.buttonContainer}
							title='Schedule Next Appointment' />
						<Text>{this.state.appointment.cancel_reason}</Text>
					</View>
				</View>
			)
		}

	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 25,
		width: 275,
		marginHorizontal: 75
	},

	headings: {
        marginHorizontal: 20,
        marginTop: 25,
        fontSize: 28,
        fontWeight: 'bold',
	},
	
	nameText: {
		fontSize: 24, 
		lineHeight:35, 
		marginTop:28,
		fontWeight: "400",
	},
	
	wholeContainer: {
        marginTop: 30,
        // justifyContent: 'center',
        alignItems: 'center',
    },
})