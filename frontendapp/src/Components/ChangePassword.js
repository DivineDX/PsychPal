import React, { Component } from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements'

const test_user =
{
    "password": "helloworld"
}


export default class ChangePassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user = test_user
        }
    }

    componentDidMount() {
        // for cj
    }

    render() {
        return (
            <View>
                {/* Attn CJ: Password they declare here MUST == password in that user object */}
                <Input
                    placeholder='Your current password'
                />
                {/* Attn CJ: Password they declare here MUST != password in that user object */}
                <Input
                    placeholder='New password'
                />
                {/* Attn CJ: Password they declare here MUST == password in second field */}
                <Input
                    placeholder='Re-enter new password'
                />
            </View>
        )
    }

}