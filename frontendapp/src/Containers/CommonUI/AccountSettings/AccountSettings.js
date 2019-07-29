import React, { Component } from 'react';
import AccountSettingsChild from './AccountSettingsChild'
import { View, AsyncStorage, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import connection from '../../../../DatabaseInteraction/Connection'

const test_user =
{
    'user_type': 'Patient',
    'name': 'Tom Cruise',
    'profile_picture_url': 'https://b.imge.to/2019/07/25/ZCTQh.jpg'
}

// Attn CJ: Data required here is the specific user object (patient/psych)
export default class AccountSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: test_user,
            profile_pic: null
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
            .then(data => this.setState({ user: data[0] }))
    }

    render() {
        alert("For this Beta Version, you may only upload your profile picture once. This is to minimise the data held on our cloud storage. ")
        return (
            <View style={styles.wholeContainer}>
                <Avatar
                    // containerStyle={ styles.avatarContainer }
                    size='large'
                    rounded
                    source={{ uri: "http://" + connection.connection + ":80/download/profile-pic/" + this.state.user.name + "profilepic.jpg" }} />
                <AccountSettingsChild user={this.state.user} />
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