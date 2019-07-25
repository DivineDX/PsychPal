import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements'
import AppointmentCard from '../../Components/Cards/AppointmentCard'


// Attn CJ: Data required here is all the appointment objects for that specific user (can be patient or psych)
// Here we assume the specific user is a patient, Karim Benzema
const test_user = {
    'name': 'Karim Benzema',
    'user_type': 'Patient'
}

const test_appointments = [
    {
        'patient_name': 'Karim Benzema',
        'doctor_name': 'Dr. Harry Kane',
        'appointment_date_time': '2019-08-21 21:30:00',
        'has_appointment_passed': 0,
        'doctor_accept': 0,
        'cancel': 0,
        'cancel_reason': null
    },
    {
        'patient_name': 'Karim Benzema',
        'doctor_name': 'Dr. Andy Robertson',
        'appointment_date_time': '2019-07-27 20:00:00',
        'has_appointment_passed': 0,
        'doctor_accept': 1,
        'cancel': 0,
        'cancel_reason': null
    },
    {
        'patient_name': 'Karim Benzema',
        'doctor_name': 'Dr. Andy Robertson',
        'appointment_date_time': '2019-07-21 19:00:00',
        'has_appointment_passed': 1,
        'doctor_accept': 1,
        'cancel': 0,
        'cancel_reason': null
    },
    {
        'patient_name': 'Karim Benzema',
        'doctor_name': 'Dr. Robert Green',
        'appointment_date_time': '2019-06-21 21:30:00',
        'has_appointment_passed': 1,
        'doctor_accept': 0,
        'cancel': 1,
        'cancel_reason': 'Hi Karim, I am on break till next year, sorry I have to cancel this.'
    },
]

export default class Planner extends Component {
    constructor(props) { //receive type and account completion as props
        super(props);
        this.state = {
            appointments: test_appointments,
            user: test_user
        }
    }

    is_pending = (appt) => {
        if (appt.doctor_accept == 0 && appt.cancel == 0) {
            return true
        } else {
            return false
        }
    }

    is_upcoming = (appt) => {
        if (appt.doctor_accept == 1 && appt.has_appointment_passed == 0 && appt.cancel == 0) {
            return true
        } else {
            return false
        }
    }

    is_past = (appt) => {
        if (appt.doctor_accept == 1 && appt.has_appointment_passed == 1 && appt.cancel == 0) {
            return true
        } else {
            return false
        }
    }

    is_cancelled = (appt) => {
        if (appt.cancel == 1) {
            return true
        } else {
            false
        }
    }

    componentDidMount() {
        // for CJ
    }


    render() {

        if (this.state.user.user_type == 'Patient') {
            return (
                <ScrollView>
                    <Text h4>Pending Appointments</Text>
                    {
                        this.state.appointments.filter(this.is_pending).map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} />
                        ))
                    }
                    <Text h4>Upcoming Appointments</Text>
                    {
                        this.state.appointments.filter(this.is_upcoming).map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} />
                        ))
                    }
                    <Text h4>Past Appointments</Text>
                    {
                        this.state.appointments.filter(this.is_past).map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} />
                        ))
                    }
                    <Text h4>Cancelled Appointments</Text>
                    {
                        this.state.appointments.filter(this.is_cancelled).map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} />
                        ))
                    }
                    <Text h4>All the test appointments repeated below for sanity check</Text>
                    {
                        this.state.appointments.map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} />
                        ))
                    }
                </ScrollView>
            )
        } else {
            return (
                <ScrollView>
                    <Text h4>Pending Appointments</Text>
                    <Text h4>Upcoming Appointments</Text>
                    <Text h4>Past Appointments</Text>
                    <Text h4>Cancelled Appointments</Text>
                    {
                        this.state.appointments.map((u) => (
                            <AppointmentCard other_party_name="name here" appointment_date_time="date and time here" />
                        ))
                    }


                </ScrollView>
            )
        }

    }
}