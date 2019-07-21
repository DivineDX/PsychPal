import React from 'react'
import { View } from 'react-native';
import {Text } from 'react-native-elements'
import AppointmentCard from '../Cards/AppointmentCard';

const AppointmentSegment = ({header, appointmentData}) => {
    return (
        <View>
            <Text h4>{header}</Text>
            {
                appointmentData.map(data => {
                    return <AppointmentCard 
                                key = {data.key}
                                dateTime = {data.dateTime}
                                person = {data.person}/>
                })
            }
        </View>

    )
}

export default AppointmentSegment

