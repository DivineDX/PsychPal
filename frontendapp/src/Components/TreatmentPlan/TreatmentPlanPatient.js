import React from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import TreatmentmentPlanCard from '../Cards/TreatmentPlanCard'
import AddTreatmentButton from '../Buttons/AddTreatmentButton'

// JSON array for treatment plan
const treatment_plan = 
[{
  "patient_name": "John Barnes",
  "treatment_title": "Paxil tablet",
  "treatment_details": "Medication for PTSD. 2 times a day. Complete course."
},
{
  "patient_name": "John Barnes",
  "treatment_title": "Paxil tablet",
  "treatment_details": "Medication for PTSD. 2 times a day. Complete course."
}]

const user_type_first = "Patient"
const user_type_second = "Psychiatrist"

const TreatmentPlanPatient = () => {
  return (
    <ScrollView>
      <Text h4>Treatment plan for {treatment_plan.patient_name}</Text>
      <AddTreatmentButton user_type={user_type_second}></AddTreatmentButton> 
      <TreatmentmentPlanCard 
        treatment_title = {treatment_plan.treatment_title}
        treatment_details = {treatment_plan.treatment_details}>
      </TreatmentmentPlanCard>
    </ScrollView>
    
  );
};

export default TreatmentPlanPatient
