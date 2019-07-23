import React from 'react';
import AccountSettingsChild from './AccountSettingsChild'
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';

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
            <Avatar
                rounded
                source={{ uri: user.profile_picture_uri }}
            />
            <AccountSettingsChild name = {user.name}></AccountSettingsChild>
        </View>
    )
}

export default AccountSettings