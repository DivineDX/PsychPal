import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements';
import { Textarea } from "native-base";

const test_appointment = {
    'appointment_date_time': '2019-07-25 16:30:00',
    'cancel': 0, // by default 0 - ie. cancel == false
    'cancel_reason': '' // by default this will be blank
}

// Attn CJ: Data required here is the appointment object
export default class CreateAppointmentLog extends Component {
    constructor(props) {
        super(props)
        this.state={
            appointment: test_appointment,
            input_reason: ''
        }
    }

    receive_reason = (text) => {
        this.setState({
            input_reason: text
        })
    }

    cancel_appointment = () => {
        // Attn CJ: set cancel = 1 and cancel_reason = input_reason
    }

    componentDidMount() {
        // for CJ
    }

    render() {
        return (
            <View>
                <Text h4>Cancel Appointment</Text>
                <Text h4>{this.state.appointment.appointment_date_time}</Text>
                <Textarea 
                    style = {styles.textboxContainer} 
                    rowSpan={5} 
                    bordered 
                    placeholder="Reason for cancellation" 
                    onChangeText={this.receive_reason} />
                {/* Set cancel = 1 and fill in cancel_reason for that appointment object */}
                {/* Once edit already navigate back to planner more details */}
                <Button 
                    title="Confirm Cancellation" 
                    onPress={this.cancel_appointment} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  textboxContainer: {
    marginHorizontal: 20,
  }
})
