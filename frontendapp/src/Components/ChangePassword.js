import React, { Component } from 'react'
import { View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import connection from '../../DatabaseInteraction/Connection'


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
            input_new_confirm: 'new_confirm'
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

    update_input_new_confirm = (text) => {
        this.setState({
            input_new_confirm: text
        })
    }

    handleInputs = () => {
        if (this.state.input_current != this.state.user.password) {
            alert("Incorrect Current Password. Please re-enter.")
        } else {
            if (this.state.input_new == this.state.input_new_confirm) {
                this.changePassword()
                alert("Password succesfully changed.")
            } else {
                alert("New Password and Confirm New Password do not match. Please re-enter.")
            }
        }
    }

    changePassword() {
        let userType = null
        if (this.state.user.user_type == 'patient') {
            userType ='patients' 
        } else {
            userType = 'doctors'
        }
        const url = 'http://' + connection.connection + ":3005/update " + userType + " set " + 
        "password = \'" + this.state.input_new + "\' where name = " + "\'" +
        this.state.user.name + '\';'
        fetch(url)
        .then(response => response.json())
        .then(data => {
        })
    }

    componentDidMount() {
        this.setState({
            user: this.props.navigation.state.params.user
        })
    }

    render() {
        return (
            <View>
                <Input placeholder='Current Password' onChangeText={this.update_input_current} />
                <Input placeholder='New Password' onChangeText={this.update_input_new} />
                <Input placeholder='Confirm New Password' onChangeText={this.update_input_new_confirm }/>
                <Button 
                    type='outline'
                    title="Confirm"
                    onPress={this.handleInputs} />
                <Text h4>All three inputs shown below for sanity check</Text>
                <Text h4>{this.state.input_current}</Text>
                <Text h4>{this.state.input_new}</Text>
                <Text h4>{this.state.input_new_confirm}</Text>
            </View>
        )
    }

}