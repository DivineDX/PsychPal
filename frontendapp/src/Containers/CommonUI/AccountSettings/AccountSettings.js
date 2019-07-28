import React, { Component } from 'react';
import AccountSettingsChild from './AccountSettingsChild'
import { View, AsyncStorage, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import connection from '../../../../DatabaseInteraction/Connection'
import RNRestart from 'react-native-restart';

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
            user : []
        }
    }

    componentDidMount() {
        let type = null
        if (this.props.screenProps.userType == 'Patient') {
            type = 'patients'
        } else {
            type = 'doctors'
        }
        fetch('http://' + connection.connection + ':3005/select * from ' + type + " where name = \'" + this.props.screenProps.userName + "\' ;")
        .then(response => response.json())
        .then(data => this.setState({user: data[0]}))
    }

    render() {
        return (
            <View>
                <Button 
                    large
                    title="Sign Out"
                    onPress=
                        {async () => {
                            try {
                                await AsyncStorage.removeItem('username');
                                await AsyncStorage.removeItem('password');
                                RNRestart.Restart();
                            } catch(error) {
                            } 
                            } } />

                <View style={styles.wholeContainer}>
                    <Avatar
                        // containerStyle={ styles.avatarContainer }
                        size='large'
                        rounded
                        source={{ uri: this.state.user.profile_picture_url }}
                    />
                    <AccountSettingsChild user = {this.state.user} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    buttonContainer: {
        width: 275,
        marginTop: 25,
        alignContent: 'center',
    },

    wholeContainer: {
        marginTop: 30,
        // justifyContent: 'center',
        alignItems: 'center',
    },

})