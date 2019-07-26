import React, { Component } from 'react'
import { Text } from 'react-native-elements'
import { ScrollView } from 'react-native'
import AddTreatmentButton from '../../Components/Buttons/AddTreatmentButton'
import TreatmentPlanCard from '../../Components/Cards/TreatmentPlanCard'


// Attn CJ: Data required here is an array of treatment objects for that 1 particular patient
const treatment_plan_test = [
    {   
        "user_type": "Patient",
        "patient_name": "Christian Eriksen",
        "treatment_title": "Strepsils",
        "treatment_details": "Placebo for PTSD. 2 times a day. Complete course."
    },
    {   
        "user_type": "Patient",
        "patient_name": "Christian Eriksen",
        "treatment_title": "Panadol",
        "treatment_details": "Panadol cures anything. 3 times a day."
    },
    {   
        "user_type": "Patient",
        "patient_name": "Christian Eriksen",
        "treatment_title": "Panadol",
        "treatment_details": "Panadol cures anything. 3 times a day."
    },
    {   
        "user_type": "Patient",
        "patient_name": "Christian Eriksen",
        "treatment_title": "Panadol",
        "treatment_details": "Panadol cures anything. 3 times a day."
    },
    {   
        "user_type": "Patient",
        "patient_name": "Christian Eriksen",
        "treatment_title": "Panadol",
        "treatment_details": "Panadol cures anything. 3 times a day."
    },
    {   
        "user_type": "Patient",
        "patient_name": "Christian Eriksen",
        "treatment_title": "Panadol",
        "treatment_details": "Panadol cures anything. 3 times a day."
    },
    {   
        "user_type": "Patient",
        "patient_name": "Christian Eriksen",
        "treatment_title": "KitKat",
        "treatment_details": "Have a break. Have a KitKat."
    }
]

export default class TreatmentPlan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            treatment_plan: treatment_plan_test
        }
    }

    componentDidMount() {
        // for cj
    }

    render() {
        return (
            <ScrollView>
                 <Text h4>Treatment Plan for {this.state.treatment_plan[0].patient_name}</Text>
                <AddTreatmentButton user_type={this.state.treatment_plan[0].user_type}></AddTreatmentButton>
                {
                    this.state.treatment_plan.map((u) => {
                        return (
                            <TreatmentPlanCard
                                treatment_title={u.treatment_title}
                                treatment_details={u.treatment_details}>
                            </TreatmentPlanCard>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

      