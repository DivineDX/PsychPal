import React from 'react'
import { View } from 'react-native';
import {Text } from 'react-native-elements'
import AppointmentCard from '../Components/Cards/AppointmentCard';

const AppointmentSegment = ({header, appointmentData, type, navigation}) => {
    console.log("Type:", type);
    return (
        <View>
            <Text h4>{header}</Text>
            {
                appointmentData.map(data => {
                    return <AppointmentCard 
                                key = {data.key}
                                dateTime = {data.dateTime}
                                person = {data.person}
                                type = {type}
                                navigation = {navigation}
                            />
                })
            }
        </View>

    )
}

export default AppointmentSegment

