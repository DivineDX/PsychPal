import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Button } from 'react-native-elements';
import { Textarea } from "native-base";

// Attn CJ: Data required here is the specific Doctor object
const test_doctor =
{
    'user_type': 'Doctor',
    'name': 'Naomi Osaka',
    'profile_picture_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
}
// Attn CJ: Data required here is the array of all language objects where name == Naomi Osaka (specific doctor)
const test_doctor_languages = [
    {
        'name': 'Naomi Osaka',
        'language': 'Japanese'
    },
    {
        'name': 'Naomi Osaka',
        'language': 'English'
    },
    {
        'name': 'Naomi Osaka',
        'language': 'French'
    }
]
export default class DoctorProfile extends Component {
    constructor() {
        super()
        this.state = {
            doctor: test_doctor,
            doctor_languages: test_doctor_languages
        }
    }

    componentDidMount() {
        // for cj
    }

    render() {
        return (
            <View style={styles.wholeContainer}>
                <Avatar
                    containerStyle={styles.avatarContainer}
                    size='large'
                    rounded
                    source={{ uri: this.state.doctor.profile_picture_url }}
                />
                <View>
                    <Text h4>{this.state.doctor.professional_credentials}</Text>
                    <Text h3>{this.state.doctor.name}</Text>
                    <View>
                        <Text h4>{'Languages Spoken: '}</Text>
                        {
                            this.state.doctor_languages.map((u) => (
                                <Text>{u.language}</Text>
                            ))
                        }
                    </View>
                </View>
                
                {/* Decided not to display short write up for each doctor */}
                {/* <Textarea style={styles.textboxContainer} rowSpan={5} bordered placeholder="Instructions" /> */}


                {/* Attn CJ: Display all the Doctor PDFs here */}
                <Text h4>Doctor PDFs here</Text>

                <Button
                    title='Request for an Appointment'
                // onPress={}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginTop: 30,
        // marginHorizontal: 170
    },

    buttonContainer: {
        width: 100,
        height: 45,
        justifyContent: 'center',
        marginTop: 10,
    },

    textboxContainer: {
        marginHorizontal: 0,
    },

    wholeContainer: {
        marginTop: 30,
        // justifyContent: 'center',
        alignItems: 'center',
    },
})