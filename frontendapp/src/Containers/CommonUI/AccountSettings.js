import React from 'react';
import AccountSettingsChild from './AccountSettingsChild'
import { View, Text, AsyncStorage } from 'react-native';
import { Avatar } from 'react-native-elements';
import {Button} from 'native-base';


// Simulate a user object (either patient or psych) pulled from db
const user = 
    {
        account_type: 'Patient',
        name : 'Aaron Ramsey',
        profile_picture_uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
        // Attn CJ: As mentioned, each user (patient/psych) will have a profile pic uri in their table
    }


const AccountSettings = () => {
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
                source={{ uri: user.profile_picture_uri }}
            />
            <AccountSettingsChild name = {user.name}></AccountSettingsChild>
        </View>
    )
}

export default AccountSettings
