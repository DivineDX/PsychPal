import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

const user = [
    {
        name : 'Xiao Ming',
        profile_picture: '',
    },
]

export default class Account extends Component {
    constructor() { //receive type and account completion as props
        super();
    }

    render() {
        return (
            <View>
                {
                    user.map((i) => {
                        return (
                            <Avatar
                            size='large'
                            rounded
                            source={{
                                uri: u.profile_picture
                            }}
                        />
                        )
                    })
                }

                <Button
                    title="Upload Profile Picture"/>
                <Button
                    title="Remove Profile Picture"/>
                <Button
                    title="Change Password"/>
                <Button
                    title="Sign Out"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})
