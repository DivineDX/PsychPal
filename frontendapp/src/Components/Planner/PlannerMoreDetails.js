import React, {Component} from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import JitsiCallButton from '../../Components/Buttons/JitsiCallButton'


const appointment_data_test =
	{
		"user_type": "Patient",
		"appointment_date": "24 July 2019",
		"appointment_time": "8:00pm",
		"doctor_name": "Dr. Andrea Pirlo",
		"patient_name": "Diego Costa",
		"jitsi_key": Math.random().toString(36).substring(2, 15)
			+ Math.random().toString(36).substring(2, 15)

	}

export default class PlannerMoreDetails extends Component {

	constructor() {
		super()
		this.state = {
			appointment_data: appointment_data_test,
			jitsi_key: appointment_data_test.jitsi_key,
		}
	}

	componentDidMount() {
		// for cj
	}

	render() {
		if (this.state.appointment_data.user_type == "Patient") {
			return (
				<View>
					<Text h4>{this.state.appointment_data.appointment_date}</Text>
					<Text h4>{this.state.appointment_data.appointment_time}</Text>
					<Text h4>{this.state.appointment_data.doctor_name}</Text>
					<Text>{'\n'}</Text>
					<Text h4>{this.state.appointment_data.jitsi_key}</Text>
					<JitsiCallButton/>
					<Button title='Join Call' />
					<Text>{'\n'}</Text>
					<Button title='Request to reschedule' />
				</View>
			)
		} else {
			return (
				<View>
					<Text h4>{this.state.appointment_data.appointment_date}</Text>
					<Text h4>{this.state.appointment_data.appointment_time}</Text>
					<Text h4>{this.state.appointment_data.patient_name}</Text>
					<JitsiCallButton key={this.state.appointment_data.jitsi_key}></JitsiCallButton>
					<Button title='Join Call' />
					<Text>{'\n'}</Text>
					<Button title='Request to reschedule' />
					<Text>{'\n'}</Text>
					<Button title='Treatment Plan of Patient' />
					<Text>{'\n'}</Text>
					<Button title='Create Appointment Log' />
					<Text>{'\n'}</Text>
					<Button title='Schedule Next Appointment' />
				</View>
			)
		}
		
	}

}
