import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements'
import AppointmentSegment from '../../Components/Planner/AppointmentSegment';

// need to refactor this based on db schema

const fakeData = [
    {
        dateTime: "Friday 21 July 2019 6.00pm - 8.00pm",
        person: "Dr. Steven Gerrard",
        apptType: "Pending"
    },
    {
        dateTime: "Friday 21 July 2019 6.00pm - 8.00pm",
        person: "Dr. Frank Lampard",
        apptType: "Upcoming"
    },
    {
        dateTime: "Friday 21 July 2019 6.00pm - 8.00pm",
        person: "Dr. Paul Scholes",
        apptType: "Upcoming"
    },
]

export default class Planner extends Component {
    constructor() { //receive type and account completion as props
        super();
        this.state={
            userData: [],
        }
    }

    componentDidMount() {
        //
    }


    render() {
        const { navigation } = this.props;
        const type = navigation.dangerouslyGetParent().dangerouslyGetParent().getParam('type', 'nulltype');
        const id = navigation.dangerouslyGetParent().dangerouslyGetParent().getParam('id', 'nullid')

        return (
            <ScrollView>
                <Text h4>Welcome back {id}</Text>

                <AppointmentSegment
                    header="Pending Appointments"
                    appointmentData={fakeData.filter(function(item) {
                        return item.apptType == 'Pending';
                    })}
                    type = {type}
                    navigation = {navigation}
                    />

                <AppointmentSegment
                    header="Upcoming Appointments"
                    appointmentData={fakeData.filter(function(item) {
                        return item.apptType == 'Upcoming';
                    })}
                    type = {type}
                    navigation = {navigation}
                    />

                <AppointmentSegment
                    header="Past Appointments"
                    appointmentData={fakeData.filter(function(item) {
                        return item.apptType == 'Past';
                    })}
                    type = {type}
                    navigation = {navigation}
                    />

            </ScrollView>
        );
    }
}