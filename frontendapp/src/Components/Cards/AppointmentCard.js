import React from 'react'
import { Card, Button, Text } from 'react-native-elements'

const AppointmentCard = (props) => {

    if (props.appointment_status == "pending") {
        return (
            <Card>
                <Text style={{ marginBottom: 15 }}>
                    {props.appointment_date_time}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {props.other_party_name}
                </Text>
                <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10 }}
                    title='View Appointment'
                //onPress = {() => navigation.navigate(nextRoute)}
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
                    {props.appointment_date_time}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {props.other_party_name}
                </Text>
                <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='View Appointment'
                //onPress = {() => navigation.navigate(nextRoute)}
                />
            </Card>
        )
    }
}

export default AppointmentCard

