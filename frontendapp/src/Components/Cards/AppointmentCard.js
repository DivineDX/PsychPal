import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Button, Text } from 'react-native-elements'

const AppointmentCard = (props) => {

    if (props.option_to_confirm == "exist") {
        return (
            <Card>
                <Text style={styles.timeInfo}>
                    {props.appointment_date_time}
                </Text>
                <Text style={styles.drName}>
                    {props.other_party_name}
                </Text>
                <Button
                    type='outline'
                    backgroundColor='#03A9F4'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10 }}
                    title='View Appointment'
                //onPress = {() => navigation.navigate(nextRoute)}
                />
                <Button
                    type='outline'
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
                    {props.appointment_date_time}
                </Text>
                <Text style={styles.drName}>
                    {props.other_party_name}
                </Text>
                <Button
                    type='outline'
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

const styles = StyleSheet.create({
    timeInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },

    drName: {
        fontSize: 18,
        marginBottom:10
    }
})