import React from 'react'
import { Card, Button, Text } from 'react-native-elements'

const AppointmentCard = ({ dateTime, person, type, navigation, jitsi_key}) => {
    let nextRoute = '';
    if (type === 'patient') {
        nextRoute = 'PatientDetails';
    } else if(type === 'psychiatrist') {
        nextRoute = 'PsychDetails'
    }

    return (
        <Card>
            <Text style={{ marginBottom: 10 }}>
                {person}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                {dateTime}
            </Text>
            <Button
                backgroundColor='#03A9F4'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='More details'
                onPress = {() => navigation.navigate(nextRoute)}
                />
        </Card>
    )
}

export default AppointmentCard

