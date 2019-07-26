import React, { Component } from 'react';
import { Linking, StyleSheet, Dimensions, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class JitsiCallButton extends Component {

    buttonPress = (jitsi_key_url) => {
        const url_first_half = "https://meet.jit.si/"
        const url_full = url_first_half.concat(jitsi_key_url)
        
        Linking.canOpenURL(url_full)
            .then((supported) => {
                if (!supported) {
                    console.warn("Can't handle url: " + url_full);
                } else {
                    return Linking.openURL(url_full);
                }
            })
            .catch((err) => console.warn('An error occurred', err));
    }

    render() {
        return (
            <View>
                <Text>Jitsi room key: {this.props.jitsi_key}</Text>
                <Button 
                    type='outline'
                    title="Join Call"onPress={() => this.buttonPress(this.props.jitsi_key)} />
            </View>
        );
    }
}

/*const { width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
    buttonContainer: {
        width: WIDTH - 100,
        height: 45,
        justifyContent: 'center',
        marginTop: 10,
    },
})*/