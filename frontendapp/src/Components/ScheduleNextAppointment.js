import { Button, Text } from 'react-native-elements'
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import DateTimePicker from './Input/DateTimePicker'

// const App = () => {
//   return (
//       <Overlay>
//         <Text h4>Request To Reschedule</Text>
//         <Text>{'\n'}</Text>
//         <Text h4>Date and Time picker here</Text>
//         <Button title="Confirm"></Button>
//         <Text>{'\n'}</Text>
//         <Button title="Cancel"></Button>
//       </Overlay>
//   );
// };

export default class SceheduleNextAppointment extends Component {
    constructor() {
        super()
        this.state = {
            userData: [],
            isVisible : true,
        }
    }

    componentDidMount() {
        // for cj
    }

    render() {
        return (
            <View>
                <Text h4>Scehedule Next Appointment{ '\n' }</Text>
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