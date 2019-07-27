import React, { Component } from 'react';
import { View, StyleSheet, Modal } from 'react-native'
import { Button, Text } from 'react-native-elements';
import { Textarea } from "native-base";
import RNRestart from 'react-native-restart';

const test_appointment = {
	'appointment_date_time': '2019-07-25 16:30:00',
	'cancel': 0, // by default 0 - ie. cancel == false
	'cancel_reason': '' // by default this will be blank
}

// Attn CJ: Data required here is the appointment object
export default class CancelAppointment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			appointment: test_appointment,
			input_reason: '',
			modalVisible: false,
		}
	}

	receive_reason = (text) => {
		this.setState({
			input_reason: text
		})
	}

	cancel_appointment = () => {
		this.setModalVisible(!this.state.modalVisible);
		const appointment = this.props.appointment;
		const {jitsy_key} = appointment;

		const url = "http://localhost:3005/update appointment_details set " +
			"cancel = 1, cancel_reason = \'" + this.state.input_reason + "\'" +
			"where jitsy_key = \'" + jitsy_key + //take jitsi_key as the unique key
			"\';"

		fetch(url).then(() => {
			RNRestart.Restart();
			return true;
		})
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	componentDidMount() {
		// for CJ
	}

	render() {
		return (
			<View>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}>
					<View style={styles.Modal}>
						<Text h4>Cancel Appointment</Text>
						<Text h4>{this.state.appointment.appointment_date_time}</Text>
						<Textarea
							style={styles.textboxContainer}
							rowSpan={5}
							bordered
							placeholder="Reason for cancellation"
							onChangeText={this.receive_reason} />
						{/* Set cancel = 1 and fill in cancel_reason for that appointment object */}
						{/* Once edit already navigate back to planner more details */}
						<Button
							title="Confirm Cancellation"
							onPress={this.cancel_appointment} />
						<Button
							title="Go back"
							onPress={() => {
								this.setModalVisible(false);
							}} />
					</View>
				</Modal>
				<Button
					containerStyle={styles.buttonContainer}
					title='Cancel Appointment'
					onPress={() => { this.setModalVisible(true); }}
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	textboxContainer: {
		marginHorizontal: 20,
	},
	buttonContainer: {
		width: 275,
		marginHorizontal: 75
	},
	Modal: {
		position: 'absolute',
		flex: 2,
		bottom: 0,
		left: 0,
		right: 0,
		top: 50,
	}
})