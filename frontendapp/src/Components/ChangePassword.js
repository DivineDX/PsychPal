import React, { Component } from 'react'
import { View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'


// Attn CJ: Data required here is the specific user object
const test_user =
{
    "password": "helloworld"
}


export default class ChangePassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user : test_user,
            input_current: 'current',
            input_new: 'new',
            input_re_enter: 're-enter'
        }
    }

    update_input_current = (text) => {
        this.setState({
            input_current: text
        })
    }

    update_input_new = (text) => {
        this.setState({
            input_new: text
        })
    }

    update_input_re_enter = (text) => {
        this.setState({
            input_re_enter: text
        })
    }

    handleInputs = () => {
        if (this.state.input_current != this.state.user.password) {
            
        }
    }

    componentDidMount() {
        // for cj
    }

    render() {
        alert("hi world")
        return (
            <View>
                {/* Attn CJ: Password they declare here MUST == password in that user object */}
                <Input placeholder='Your current password' onChangeText={this.update_input_current} />
                {/* Attn CJ: New password they declare here MUST != password in that user object */}
                <Input placeholder='New password' onChangeText={this.update_input_new} />
                <Input placeholder='Re-enter new password' onChangeText={this.update_input_re_enter }/>
                <Button 
                    title="Confirm"
                    onPress={this.handleInputs} />
                <Text h4>All three inputs shown below for sanity check</Text>
                <Text h4>{this.state.input_current}</Text>
                <Text h4>{this.state.input_new}</Text>
                <Text h4>{this.state.input_re_enter}</Text>
            </View>
        )
    }

}