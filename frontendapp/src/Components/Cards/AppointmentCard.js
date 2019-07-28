import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { Card, Button, Text} from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class AppointmentCard extends Component{
    constructor(props) { 
        super(props);
    }

    render() {

        if (this.props.option_to_confirm == "exist") {
            const date = this.props.appointment_date_time.substring(0,10)
            const time = this.props.appointment_date_time.substring(11,16)
            const datetime = date + '  ' + time
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
            const date = this.props.appointment_date_time.substring(0,10)
            const time = this.props.appointment_date_time.substring(11,16)
            const datetime = date + '  ' + time
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
