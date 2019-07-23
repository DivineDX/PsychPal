import { ScrollView, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import React, { Component } from 'react';

const dates = [
    {
        date: '21-03-2019'
    },

    {
        date: '22-03-2019'
    },
]

const patient = { 
    name: 'Asahi',
    age: '23',
    // put as array of languages, modify to text only if needed
    language: [
        'English',
        'Spanish'
    ],
    medicalSypnosis: 'Cancer Stage 5\nNeeds euthanasia',
    // put as array, modify to tet only if needed
    drugAllergies: [
        'Panadol',
        'Ibuprofen',
        'Fendac'
    ],
    pastCondition: 'Cancer Stage 4',
    familyHistory: 'All died of cancer'
}

export default class MedicalRecord extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
        }
    }

    componentDidMount() {
        // for cj
    }

    render(props) {
        return (
            <ScrollView>
                <Text h2>{ 'Medical Record' }</Text>
                <Text h3>{ 'Basic Information' }</Text>
                    <Text h4>
                        { 'Name:' +  patient.name + '\n' +
                        'Age: ' +  patient.age  + '\n' +
                        'Language: ' + patient.language.toString() + '\n' }
                    </Text>
                    
                    
                <Text h3>{ 'Current Condition' }</Text>
                    <Text h4>
                        { 'Medical Sypnosis / Diagnosis: ' + patient.medicalSypnosis + '\n' }
                    </Text>
                <Text h3>{ 'Medical History' }</Text>
                    <Text h4>
                        { 'Drug Allergies: ' + patient.drugAllergies + '\n' +
                        'Past Condition: ' + patient.pastCondition + '\n' +
                        'Family History: ' + patient.familyHistory + '\n' }
                    </Text>
                <Text h3>{ 'Medical Log:' }</Text>
                    {
                        dates.map((i) => {
                            return (
                                <Text h4>{ 'Appointment on ' + i.date }</Text>
                            )
                        })
                    }
		</ScrollView>
        )
    }
}