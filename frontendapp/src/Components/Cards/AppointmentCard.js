import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { Card, Button, Text} from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class AppointmentCard extends Component{
    constructor(props) { 
        super(props);
    }

    render() {
        let {appointment_date_time} = this.props;
        // datetime = new Date(appointment_date_time).toUTCString();
        datetime = new Date(appointment_date_time).toLocaleString();
        if (this.props.option_to_confirm == "exist") {
            return (
                <Card>
                    <Text style={styles.timeInfo}>
                        {datetime}
                    </Text>
                    <Text style={styles.drName}>
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
                    <Text style={styles.timeInfo}>
                        {datetime}
                    </Text>
                    <Text style={styles.drName}>
                        {this.props.other_party_name}
                    </Text>
                    <Button
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='View Appointment'
                        onPress = {() => this.props.navigation.navigate('moreDetails', {
                            appointmentObj: this.props.appointmentObj,
                            userType: this.props.userType
                        })}
                    />
                </Card>
            )
        }
    }
}
    
export default withNavigation(AppointmentCard);

const styles = StyleSheet.create({
    timeInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },

    drName: {
        fontSize: 20,
        marginBottom:10
    }
})
