import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Button } from 'react-native-elements'
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
            //test local data put test_appointments in []
            appointments: [],
            user: test_user,
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

    refresh_page = () => {
        let userName = this.props.screenProps.userName
        fetch('http://localhost:3005/select *, appointment_date_time <  now() as has_appointment_passed from appointment_details where patient_name = \'' + userName + "\'")
          .then(response => response.json())
          .then(data => this.setState({appointments: data,
            user: this.props.screenProps.userType
        }))
    }

    componentDidMount() {
        let userName = this.props.screenProps.userName
        fetch('http://localhost:3005/select *, appointment_date_time <  now() as has_appointment_passed from appointment_details where patient_name = \'' + userName + "\'")
          .then(response => response.json())
          .then(data => this.setState({appointments: data,
            user: this.props.screenProps.userType
        }))
    }


    render() {
        if (this.state.user == 'Psychiatrist') {
            return (
                <ScrollView>
                    <Button title="Refresh" onPress={this.refresh_page}/>
                    <Text h4>Pending Appointments</Text>
                    {
                        this.state.appointments.filter(this.is_pending).map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time}  option_to_confirm="exist"/>
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
                    <Button title="Refresh" onPress={this.refresh_page}/>
                    <Text h4>Pending Appointments</Text>
                    {
                        this.state.appointments.filter(this.is_pending).map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} 
                                appointmentObj = {u}
                                userType = {this.state.user}
                            />
                        ))
                    }
                    <Text h4>Upcoming Appointments</Text>
                    {
                        this.state.appointments.filter(this.is_upcoming).map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} 
                            appointmentObj = {u}
                            userType = {this.state.user}
                            />
                        ))
                    }
                    <Text h4>Past Appointments</Text>
                    {
                        this.state.appointments.filter(this.is_past).map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} 
                            appointmentObj = {u}
                            userType = {this.state.user}
                            />
                        ))
                    }
                    <Text h4>Cancelled Appointments</Text>
                    {
                        this.state.appointments.filter(this.is_cancelled).map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} 
                            appointmentObj = {u}
                            userType = {this.state.user}
                            />
                        ))
                    }
                    <Text h4>All the test appointments repeated below for sanity check</Text>
                    {
                        this.state.appointments.map((u) => (
                            <AppointmentCard other_party_name={u.doctor_name} appointment_date_time={u.appointment_date_time} 
                            appointmentObj = {u}
                            userType = {this.state.user}
                            />
                        ))
                    }
                </ScrollView>
            )
        }

    }
}