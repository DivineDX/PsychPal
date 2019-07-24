import React from 'react';
import { View, Button } from 'react-native';
import { Text } from 'react-native-elements';


const AccountSettingsChild = (props) => {
    return (
        <View> 
            <Text h4>{props.name}</Text>
            <Text>{'\n'}</Text>
            
            {/* Attn CJ: Let user upload img in app + Change profile_pic_url for this specific user object */}
            <Button
                title="Update Profile Picture"/>
            <Text>{'\n'}</Text>
            
            {/* Attn CJ: Delete profile_pic_url for this specific user object - set to null */}
            <Button
                title="Remove Profile Picture"/>
            <Text>{'\n'}</Text>

            {/* Attn CJ: Change password for this specific user object */}
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