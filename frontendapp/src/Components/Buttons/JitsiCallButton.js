import React, { Component } from 'react';
import { Linking,  View, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-elements';

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
                
                <Card
                    title='Jitsi Room Key'>

                    <Text style={styles.key}>{this.props.jitsi_key}</Text>
                    {/* <Text style={styles.timeInfo}>
                    </Text>
                    <Text style={styles.drName}>
                        {this.props.other_party_name}
                    </Text> */}
                </Card>


                <Text style={styles.headings}>Jitsi room key: 
                    
                </Text>
                <Text style={styles.key}>{this.props.jitsi_key}</Text>
                
                <Button 
                    type='outline'
                    containerStyle={styles.buttonContainer}
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

const styles = StyleSheet.create({
	buttonContainer: {
        marginTop: 25,
        marginBottom: 30,
		width: 275,
		marginHorizontal: 75
    },
    
    headings: {
        marginHorizontal: 15,
        marginTop: 25,
        fontSize: 22,
    },

    roomKeyHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },

    key: {
        fontSize: 18,
        marginBottom:10
    }
})