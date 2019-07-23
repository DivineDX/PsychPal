import { Card, Button, Text } from 'react-native-elements'
import React from 'react'

const DoctorCard = (props) => {
    return (
        <Card title={props.name}>
            <Avatar
                size='large'
                rounded
                source={{
                    uri: props.profile_picture
                }}
            />

            <Text style={{marginBottom: 10}}>
                {props.name}
            </Text>

            <Text style={{marginBottom: 10}}>
                {props.languages}
            </Text>

            <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='More details' />
        </Card>
    )
}

export default DoctorCard

