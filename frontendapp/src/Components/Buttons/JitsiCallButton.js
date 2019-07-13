import React, { Component } from 'react';
import { Linking, StyleSheet, Dimensions, View } from 'react-native';
import { Button, Text } from 'native-base';

export default class JitsiCallButton extends Component {
    buttonPress = () => {
        const meeting_url = 'loltest'; //edit acccordingly for test, to be handle with props later on
        const url = `https://meet.jit.si/${meeting_url}`; //string
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    console.warn("Can't handle url: " + url);
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch((err) => console.warn('An error occurred', err));
    }

    render() {
        return (
            <View>
                <Button rounded success onPress={() => this.buttonPress()} style={styles.buttonContainer}>
                    <Text>Start Video Call</Text>
                </Button>
            </View>
        );
    }
}
const { width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
    buttonContainer: {
        width: WIDTH - 100,
        height: 45,
        justifyContent: 'center',
        marginTop: 10,
    },
})