import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Text, Button } from 'react-native-elements';
import { Textarea } from "native-base";

const test_doctor = {
	"doctor_name": "Dr. Andy Robertson"
}

const test_patient = {
	"patient_name": "Diego Costa"
}

// Attn CJ: Data required here is the doctor accessing this page and the specific patient object
export default class AddTreatment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			doctor: test_doctor,
			patient: test_patient,
			treatment_title: '',
			treatment_details: ''
		}
	}

	receive_treatment_title = (text) => {
		this.setState({
			treatment_title: text
		})
	}

	receive_treatment_details = (text) => {
		this.setState({
			treatment_details: text
		})
	}

	create_treatment_obj = () => {
		// Attn CJ: Create treatment object
	}

	componentDidMount() {
		// for cj
	}

	render() {
		return (
			<View>
				<Text h4>Add treatment for {this.state.patient.patient_name}</Text>
				<Input placeholder="Title" onChangeText={this.receive_treatment_title} />
				<Textarea
					style={styles.textboxContainer}
					rowSpan={5}
					bordered
					placeholder="Instructions"
					onChangeText={this.receive_treatment_details} />
				{/* Attn CJ: Create treatment obj and store in database */}
				{/* Once create already navigate back to treatment plan page */}
				<Button title="Confirm" onPress={this.create_treatment_obj} />

			</View>
		)
	}
}

const styles = StyleSheet.create({
	textboxContainer: {
		marginHorizontal: 20,
	}
})
