import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';


const AccountSettingsChild = (props) => {

    if (props.user_type == "Patient") {
        return (
            <View style={styles.buttonContainer2}>
                <Text style={styles.textStyle}>{props.name}</Text>

                {/* Attn CJ: Let user upload img in app + Change profile_pic_url for this specific patient */}
                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
                    title="Update Profile Picture" />

                {/* Attn CJ: Delete profile_pic_url for this specific patient - set to null */}
                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
                    title="Remove Profile Picture" />

                {/* Attn CJ: Change password for this specific patient */}
                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
                    title="Change Password" />

                {/* Attn CJ: End login session */}
                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
                    title="Sign Out" />
            </View>
        )
    } else {
        return (
            <View style={styles.buttonContainer2}>
                <Text style={styles.textStyle}>{props.name}</Text>

                {/* Attn CJ: Let user upload img in app + Change profile_pic_url for this specific doctor */}
                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
                    title="Update Profile Picture" />

                {/* Attn CJ: Delete profile_pic_url for this specific doctor - set to null */}
                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
                    title="Remove Profile Picture" />
                {/* Attn CJ: Let doctor upload document in app + Change cv for this specific doctor */}
                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
                    title="Re-upload CV" />
                {/* Attn CJ: Change password for this specific doctor - redirect to ChangePassword */}
                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
                    title="Change Password" />

                {/* Attn CJ: End login session */}
                <Button
                    type='outline'
                    containerStyle={styles.buttonContainer}
                    title="Sign Out" />
            </View>
        )
    }


}

export default AccountSettingsChild

const styles = StyleSheet.create({
    buttonContainer: {
        width: 275,
        marginTop: 25,
        alignContent: 'center',
    },

    buttonContainer2: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 40,
    },

    textStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    }
})