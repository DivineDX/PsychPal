import React from 'react'
import { Card, Button, Text } from 'react-native-elements'

const AppointmentCard = (props) => {
    return (
        <Card>
            <Text style={{ marginBottom: 10 }}>
                {props.other_party_name}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                {props.appointment_date_time}
            </Text>
            <Button
                backgroundColor='#03A9F4'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='View Appointment'
                onPress = {() => navigation.navigate(nextRoute)}
                />
        </Card>
    )
}

export default AppointmentCard

