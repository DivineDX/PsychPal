import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage} from 'react-native';
import { Text, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import RNRestart from 'react-native-restart';

class AccountSettingsChild extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.user.user_type == "patient") {
            return (
                <View style={styles.buttonContainer2}>
                    <Text style={styles.textStyle}>{this.props.user.name}</Text>
                    <Button
                        type='outline'
                        containerStyle={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('uploadProfilePic', {
                            user: this.props.user
                        })}
                        title="Upload Profile Picture" />
                    <Button 
                        type='outline'
                        containerStyle={styles.buttonContainer}
                        onPress={()=>RNRestart.Restart()}
                        title="Restart App After Upload" />
                    <Button
                        type='outline'
                        containerStyle={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('ChangePassword', {
                            user: this.props.user
                        })}
                        title="Change Password" />
                    <Button
                        type='outline'
                        containerStyle={styles.buttonContainer}
                        onPress={async () => {
                            try {
                                await AsyncStorage.removeItem('username');
                                await AsyncStorage.removeItem('password');
                                RNRestart.Restart();
                            } catch (error) {
                            }
                        }}
                        title="Sign Out" />
                </View>
            )
        } else {
            return (
                <View style={styles.buttonContainer2}>
                    <Text style={styles.textStyle}>{this.props.user.name}</Text>
                    <Button
                        type='outline'
                        containerStyle={styles.buttonContainer}
                        title="Upload Profile Picture" />
                    <Button
                        type='outline'
                        containerStyle={styles.buttonContainer}
                        title="Re-upload CV" />
                    <Button
                        type='outline'
                        containerStyle={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('ChangePassword')}
                        title="Change Password" />
                    <Button
                        type='outline'
                        containerStyle={styles.buttonContainer}
                        title="Sign Out" />
                </View>
            )
        }
    }

}

export default withNavigation(AccountSettingsChild);

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
