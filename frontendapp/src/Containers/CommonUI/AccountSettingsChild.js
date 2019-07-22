import React from 'react';
import { View, Button } from 'react-native';
import { Text } from 'react-native-elements';


const AccountSettingsChild = (props) => {
    return (
        <View> 
            <Text h4>{props.name}</Text>
            
            {/* Attn CJ: Change img uri from db */}
            <Button
                title="Update Profile Picture"/>
            <Text>{'\n'}</Text>
            
            {/* Attn CJ: Delete img uri from db */}
            <Button
                title="Remove Profile Picture"/>
            <Text>{'\n'}</Text>

            {/* Attn CJ: Change password from db */}
            <Button
                title="Change Password"/>
            <Text>{'\n'}</Text>

            {/* Attn CJ: End user login session */}
            <Button
                title="Sign Out"/>
            <Text>{'\n'}</Text>
        </View>

    )
}

export default AccountSettingsChild