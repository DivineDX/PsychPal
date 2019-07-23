import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements';
import { Textarea } from "native-base";


export default class CreateAppointmentLog extends Component {
    constructor() {
        super()
        this.state={
            userData:[],
            name: 'Ashley',
        }
    }

    componentDidMount() {
        // for cj
    }

    render() {
        return (
            <View>
                <Text h4>{`\n  `}Appointment Log for {this.state.name + '\n'}</Text>

                <Input
                    placeholder='Title'
                />

                <Textarea style = {styles.textboxContainer} rowSpan={5} bordered placeholder="Instructions" />

            </View>
        )
    }
}

const styles = StyleSheet.create({
  textboxContainer: {
    marginHorizontal: 20,
  }
})
