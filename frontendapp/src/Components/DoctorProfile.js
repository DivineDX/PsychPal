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
                <View style = {styles.textboxContainer}>
                    <Text style={{fontSize:24}}>{this.state.doctor.professional_credentials}</Text>
                    <Text h3>{this.state.doctor.name}</Text>
                    <View style = {styles.languagesContainer}>
                        <Text style={{fontSize:24, fontWeight:'400'}}>{'Languages: '}</Text>
                        <View style = {styles.colContainer}>
                        {
                            this.state.doctor_languages.map((u) => (
                                <Text style={styles.langText}>{u.language}</Text>
                            ))
                        }
                        </View>
                    </View>
                </View>
                
                {/* Attn CJ: Display all the Doctor PDFs here */}
                <Text h4>Doctor PDFs here</Text>

                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
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
        marginBottom: 10
    },

    buttonContainer: {
        // width: 100,
        // height: 45,
        marginTop: 20,
    },

    textboxContainer: {
        marginHorizontal: 0,
        alignItems: 'center',
    },

    wholeContainer: {
        marginTop: 10,
        // justifyContent: 'center',
        alignItems: 'center',
    },

    languagesContainer: {
        marginTop: 10, 
        flexDirection: 'row',
        marginBottom: 10
    },

    colContainer: {
        flexDirection: 'column'
    },

    langText: {
        fontSize: 20,
        lineHeight: 35
    }
})