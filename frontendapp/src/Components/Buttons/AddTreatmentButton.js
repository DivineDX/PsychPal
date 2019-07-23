import React from 'react'
import { Button } from 'react-native-elements'

// Conditional rendering - AddTreatment button is only rendered for user type is Psychiastrist
const AddTreatmentButton = (props) => {
    if (props.user_type == "Psychiatrist") {
        return (
            <Button title="Add Treatment"/>
        )
    } else {
        return null
    }
}

export default AddTreatmentButton
