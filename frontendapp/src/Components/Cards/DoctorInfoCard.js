import { Card, Button, Text } from 'react-native-elements'
import React from 'react'

const DoctorCard = (name, lang, profile_picture) => {
    return (
        <Card title={props.doctorName}>
            <Avatar
                size='large'
                rounded
                source={{
                    uri: profile_picture
                }}
            />

            <Text style={{marginBottom: 10}}>
                { name }
            </Text>

            <Text style={{marginBottom: 10}}>
                {`Spoken languages: ` + lang}
            </Text>

            <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='More details' />
        </Card>
    )
}

export default DoctorCard

