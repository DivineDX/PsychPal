import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import DateTimePicker from './Input/DateTimePicker'


export default class ScheduleNextAppointment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected_date: 'hi'
        }
    }

    handleSelection = date => {
        this.setState({ selected_date: date.toString() })
        this.forceUpdate()
    }

    componentDidMount() {
        // for CJ
    }

    render() {
        return (
            <View>
                <Text h4>Schedule Next Appointment{ '\n' }</Text>
                <DateTimePicker onConfirm={this.handleSelection}></DateTimePicker>
                <Text>{'\n'}</Text>
                <Button 
                    buttonStyle={ styles.buttonContainer }
                    title="Confirm"></Button>
                <Button 
                    buttonStyle = { styles.buttonContainer }
                    title="Cancel"></Button>
                <Text>{this.state.selected_date}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
	buttonContainer: {
		marginHorizontal: 20,
		marginBottom: 20,
	}
})  