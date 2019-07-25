import { Button, Text } from 'react-native-elements'
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import DateTimePicker from '../Components/Input/DateTimePicker'

export default class RequestReschedule extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        // for cj
    }

    render() {
        return (
            <View>
                <Text h4>Request To Reschedule { '\n' }</Text>
                <DateTimePicker></DateTimePicker>

                <Text>{'\n'}</Text>

                <Button 
                    buttonStyle={ styles.buttonContainer }
                    title="Confirm"></Button>

                <Text>{'\n'}</Text>

                <Button 
                    buttonStyle = { styles.buttonContainer }
                    title="Cancel"></Button>
            </View>
        )
    }

}

const styles = StyleSheet.create({
	buttonContainer: {
		marginHorizontal: 20,
		marginBottom: 10,
	}
})  