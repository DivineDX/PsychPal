import { Card, Button, Text } from 'react-native-elements'
import React from 'react'

const DoctorCard = (props) => {
    return (
        <Card title={props.doctorName}>
            <Text style={{marginBottom: 10}}>
            {`Spoken languages: English, Spanish\nMedical College of Liverpool`}
            </Text>
            <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='More details' />
        </Card>
    )
}

export default DoctorCard

