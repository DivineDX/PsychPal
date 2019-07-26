import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

// Attn CJ: Appointment object created with doctor_accept == 1
export default class ScheduleNextAppointment extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
            selectedDate: ""
        };
    }
    
    componentDidMount() {
        // for CJ
    }

	showDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: true });
	};

	hideDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: false });
	};

	handleDatePicked = date => {
		this.setState({ selectedDate: "Appointment scheduled for \n" + date.toString() });
		this.hideDateTimePicker();
	};

	render() {

		return (
			<View style={styles.container}>
				<Button 
					type='outline'
					title="Schedule Next Appointment" 
					onPress={this.showDateTimePicker} />
				<Text style={styles.text}>{this.state.selectedDate}</Text>
				<DateTimePicker
					isVisible={this.state.isDateTimePickerVisible}
					onConfirm={this.handleDatePicked}
					onCancel={this.hideDateTimePicker}
					mode='datetime'
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		fontSize: 22,
		marginVertical: 10
	}
});