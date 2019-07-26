import React, { Component } from 'react';
import { Card, Button, Text } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class AppointmentCard extends Component{
    constructor(props) { 
        super(props);
    }

    render() {
        console.log(this.props.userType)
        if (this.props.appointment_status == "pending") {
            return (
                <Card>
                    <Text style={{ marginBottom: 15 }}>
                        {this.props.appointment_date_time}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        {this.props.other_party_name}
                    </Text>
                    <Button
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10 }}
                        title='View Appointment'
                        onPress = {() => this.props.navigation.navigate('moreDetails', {
                            appointmentObj: this.props.appointmentObj,
                            userObj: this.props.userType
                        })}
                    />
                    <Button
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Confirm Appointment'
                    />
                </Card>
            )
        } else {
            return (
                <Card>
                    <Text style={{ marginBottom: 15 }}>
                        {this.props.appointment_date_time}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        {this.props.other_party_name}
                    </Text>
                    <Button
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='View Appointment'
                        onPress = {() => this.props.navigation.navigate('moreDetails', {
                            appointmentObj: this.props.appointmentObj,
                            userObj: this.props.userType
                        })}
                    />
                </Card>
            )
        }
    }
}
    
export default withNavigation(AppointmentCard);

