
import { View, ScrollView, StyleSheet } from 'react-native'
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
                <View style = {{alignItems:'center'}}>
                    <Text h2>{ 'Medical Record' }</Text>
                </View>
                <View style = {{marginTop: 30, marginHorizontal: 15}}> 
                    <Text h3>{ 'Basic Information' }</Text>
                    <View style = {styles.eachBlock}>
                        <Text h4>
                            { 'Name:' +  patient.name + '\n' +
                            'Age: ' +  patient.age  + '\n' +
                            'Language: ' + patient.language.toString() + '\n' }
                        </Text>
                    </View>
                    
                    <Text h3>{ 'Current Condition' }</Text>
                    <View style = {styles.eachBlock}>
                        <Text h4>
                            { 'Medical Sypnosis: ' + patient.medicalSypnosis + '\n' }
                        </Text>
                    </View>

                    <Text h3>{ 'Medical History' }</Text>
                    <View style = {styles.eachBlock}>
                        <Text h4>
                            { 'Drug Allergies: ' + patient.drugAllergies + '\n' +
                            'Past Condition: ' + patient.pastCondition + '\n' +
                            'Family History: ' + patient.familyHistory + '\n' }
                        </Text>
                    </View>

                    <Text h3>{ 'Medical Log:' }</Text>
                    <View styles = {styles.eachBlock}>
                        {
                            dates.map((i) => {
                                return (
                                    <Text h4>{ 'Appointment on ' + i.date }</Text>
                                )
                            })
                        }
                    </View>
                </View>
		</ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    eachBlock: {
        marginTop: 5,
        marginHorizontal: 10
    }
})