import React, { Component } from 'react';
import AccountSettingsChild from './AccountSettingsChild'
import { View, Text, AsyncStorage } from 'react-native';
import { Avatar } from 'react-native-elements';
import {Button} from 'native-base';


const test_user = 
    {
        user_type: 'Patient',
        name : 'Aaron Ramsey',
        profile_picture_uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    }

// Attn CJ: Data required here is the specific user object (patient/psych)
export default class AccountSettings extends Component {
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
            <View>
                <Button large onPress={async () => {
                            try{
                                await AsyncStorage.removeItem('username');
                                await AsyncStorage.removeItem('password');
                            }catch(error) {
    
                            }
                    }}><Text>reset</Text></Button>
                <Avatar
                    rounded
                    source={{ uri: this.state.user.profile_picture_uri }}
                />
                <AccountSettingsChild name = {this.state.user.name}></AccountSettingsChild>
            </View>
        )
    }
}
