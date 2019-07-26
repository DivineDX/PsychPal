import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements';
import { Textarea } from "native-base";

const test_appointment = {
    'appointment_details': '', // by default appointment details will be blank
    'appointment_date_time': '2019-07-25 16:30:00'
}

// Attn CJ: Data required here is the appointment object
export default class CreateAppointmentLog extends Component {
    constructor(props) {
        super(props)
        this.state={
            appointment: test_appointment,
            input_appointment_details: ''
        }
    }

    receive_appointment_details = (text) => {
        this.setState({
            input_appointment_details: text
        })
    }

    add_details_to_obj = () => {
        // Attn CJ: Fill in the appointment details for that appointment object
        // data is stored in input_appointment_details
    }

    componentDidMount() {
        // for CJ
    }

    render() {
        return (
            <View>
                <Text h4>Appointment Log</Text>
                <Text h4>{this.state.appointment.appointment_date_time}</Text>
                <Textarea 
                    style = {styles.textboxContainer} 
                    rowSpan={5} 
                    bordered 
                    placeholder="Notes for this session" 
                    onChangeText={this.receive_appointment_details} />
                {/* Edit appointment details of appt obj */}
                {/* Once edit already navigate back to planner more details */}
                <Button title="Confirm" onPress={this.add_details_to_obj} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  textboxContainer: {
    marginHorizontal: 20,
  }
})
