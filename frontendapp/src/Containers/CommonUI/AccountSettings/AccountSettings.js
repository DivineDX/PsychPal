import React, { Component } from 'react';
import AccountSettingsChild from './AccountSettingsChild'
import { View, AsyncStorage, StyleSheet } from 'react-native';
import { Avatar, Button} from 'react-native-elements';


const test_user = 
    {
        'user_type': 'Patient',
        'name' : 'Tom Cruise',
        'profile_picture_url': 'https://b.imge.to/2019/07/25/ZCTQh.jpg'
    }

// Attn CJ: Data required here is the specific user object (patient/psych)
export default class AccountSettings extends Component {
    constructor(props) {
        super(props)
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
                <Button 
                    large
                    title="Reset"
                    onPress=
                        {async () => {
                            try {
                                await AsyncStorage.removeItem('username');
                                await AsyncStorage.removeItem('password');
                            } catch(error) {
                            } 
                            } } />
                <Avatar
                    containerStyle={ styles.avatarContainer }
                    size='large'
                    rounded
                    source={{ uri: this.state.user.profile_picture_url }}
                />
                <Button
                    style={ styles.buttonContainer }
                    title="Update Profile Picture"/>
                <AccountSettingsChild name = {this.state.user.name}></AccountSettingsChild>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginHorizontal: 170
    },

    buttonContainer: {
        width: 100,
        height: 45,
        justifyContent: 'center',
        marginTop: 10,
    },
})
