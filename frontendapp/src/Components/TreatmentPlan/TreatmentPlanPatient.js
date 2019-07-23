import React from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import TreatmentmentPlanCard from '../Cards/TreatmentPlanCard'
import AddTreatmentButton from '../Buttons/AddTreatmentButton'

// JSON array for treatment plan
const treatment_plan = [
  {
  "patient_name": "Christian Eriksen",
  "treatment_title": "Paxil tablet",
  "treatment_details": "Medication for PTSD. 2 times a day. Complete course."
  },
  {
  "patient_name": "Christian Eriksen",
  "treatment_title": "Panadol",
  "treatment_details": "Panadol cures anything. 3 times a day."
  }
]

const user_type_first = "Patient"
const user_type_second = "Psychiatrist"

const TreatmentPlanPatient = () => {
  return (
    <ScrollView>
      <Text h4>Treatment Plan for {treatment_plan[0].patient_name}</Text>
      <AddTreatmentButton user_type={user_type_second}></AddTreatmentButton> 
      {
        treatment_plan.map((u) => {
          return (
            <TreatmentmentPlanCard 
              treatment_title = {u.treatment_title}
              treatment_details = {u.treatment_details}>
            </TreatmentmentPlanCard>
          )
        })
      }
    </ScrollView>
    
  );
};

export default TreatmentPlanPatient
