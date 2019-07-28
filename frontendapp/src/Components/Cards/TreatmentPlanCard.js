import React from 'react'
import { Card, Button, Text } from 'react-native-elements'


const TreatmentPlanCard = (props) => {
    if (props.user_type == "Patient") {
        return (
            <Card title={props.treatment_title}>
                <Text>{props.treatment_details}</Text>
            </Card>
        )
    } else {
        return (
            <Card title={props.treatment_title}>
                <Text>{props.treatment_details}</Text>
                {/* Attn CJ: Delete treatment plan from db on click of button */}
                <Button
                    type='outline'
                    backgroundColor='#03A9F4'
                    //buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Remove' />
            </Card>
        )
    }
    
    
}

export default TreatmentPlanCard
