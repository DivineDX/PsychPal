import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';


const AccountSettingsChild = (props) => {
    return (
        <View style={styles.buttonContainer2}> 
            <Text h4>{props.name}</Text>
                  
            {/* Attn CJ: Let user upload img in app + Change profile_pic_url for this specific user object */}
            <Button
                containerStyle={ styles.buttonContainer }
                title="Update Profile Picture"/>           
            
            {/* Attn CJ: Delete profile_pic_url for this specific user object - set to null */}
            <Button
                containerStyle={ styles.buttonContainer }
                title="Remove Profile Picture"/>
            
            {/* Attn CJ: Change password for this specific user object */}
            <Button
                containerStyle={ styles.buttonContainer }
                title="Change Password"/>
            
            {/* Attn CJ: End user login session */}
            <Button
                containerStyle={ styles.buttonContainer }
                title="Sign Out"/>
            
        </View>

    )
}

export default AccountSettingsChild

const styles = StyleSheet.create({
	buttonContainer: {
		width: 275,
        // marginTop: 25,
        alignContent: 'center',
    },
    
    buttonContainer2: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 40,
    },
})