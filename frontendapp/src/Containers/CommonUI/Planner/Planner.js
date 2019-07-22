import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements'
import AppointmentSegment from '../../../Components/Planner/AppointmentSegment';

const fakeData = [ //replaced with database fetch call in future
    {
        key: 1,
        dateTime: "Friday 21 July 2019 6.00pm - 8.00pm",
        person: "Dr. Milner",
    },
    {
        key: 2,
        dateTime: "Friday 21 July 2019 6.00pm - 8.00pm",
        person: "Dr. Milner",
    },
    {
        key: 3,
        dateTime: "Friday 21 July 2019 6.00pm - 8.00pm",
        person: "Dr. Milner",
    },
]

export default class Planner extends Component {
    constructor() { //receive type and account completion as props
        super();
    }

    render() {
        const { navigation } = this.props;
        const type = navigation.dangerouslyGetParent().dangerouslyGetParent().getParam('type', 'nulltype');
        const id = navigation.dangerouslyGetParent().dangerouslyGetParent().getParam('id', 'nullid')

        return (
            <ScrollView>
                <Text h4>Welcome back {id}</Text>
                {
                    type === 'psychiatrist'
                        ? <AppointmentSegment
                            header="Pending Appointments"
                            appointmentData={fakeData}
                            type = {type}
                            navigation = {navigation}
                            />
                        : null
                }

                <AppointmentSegment
                    header="Upcoming Appointments"
                    appointmentData={fakeData}
                    type = {type}
                    navigation = {navigation}
                    />

                <AppointmentSegment
                    header="Past Appointments"
                    appointmentData={fakeData}
                    type = {type}
                    navigation = {navigation}
                    />

            </ScrollView>
        );
    }
}