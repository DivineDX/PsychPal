import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Button } from 'react-native-elements';
import { Textarea } from "native-base";

const test_user = 
    {
        user_type: 'Patient',
        name : 'Aaron Ramsey',
        profile_picture_uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        professional_credentials: 'MBBS (NUS)',
        languages_spoken: ['Chinese', 'Italian', 'French', 'English']
    }

export default class DoctorProfile extends Component {
    constructor() {
        super()
        this.state = {
            user : test_user
        }
    }

    componentDidMount() {
        // for cj
    }

    render() {
        return (
            <View style={ styles.wholeContainer }>
                <Avatar
                    containerStyle={ styles.avatarContainer }
                    size='large'
                    rounded
                    source={{ uri: this.state.user.profile_picture_uri }}
                />
                <View>
                    <Text h4>{ this.state.user.professional_credentials }</Text>
                    <Text h3>{ this.state.user.name }</Text>
                    <View>
                    <Text h4>{ 'Languages Spoken: ' }</Text>
                    <Text h5>{ this.state.user.languages_spoken.toString() }</Text>
                    </View>
                </View>

                <Textarea style = {styles.textboxContainer} rowSpan={5} bordered placeholder="Instructions" />

                {/* <PDF></PDF> */}
                {/* for pdfs */}
                
                <Button 
                    title='Request for appointment'
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