import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import TreatmentPlanCard from "../../Components/Cards/TreatmentPlanCard";

// Attn CJ: Data required here is an array of treatment objects for that 1 particular patient
const treatment_plan_test = [
	{
		user_type: "Patient",
		patient_name: "Christian Eriksen",
		treatment_title: "Strepsils",
		treatment_details: "Placebo for PTSD. 2 times a day. Complete course."
	},
	{
		user_type: "Patient",
		patient_name: "Christian Eriksen",
		treatment_title: "Panadol",
		treatment_details: "Panadol cures anything. 3 times a day."
	},
	{
		user_type: "Patient",
		patient_name: "Christian Eriksen",
		treatment_title: "Panadol",
		treatment_details: "Panadol cures anything. 3 times a day."
	},
	{
		user_type: "Patient",
		patient_name: "Christian Eriksen",
		treatment_title: "Panadol",
		treatment_details: "Panadol cures anything. 3 times a day."
	},
	{
		user_type: "Patient",
		patient_name: "Christian Eriksen",
		treatment_title: "Panadol",
		treatment_details: "Panadol cures anything. 3 times a day."
	},
	{
		user_type: "Patient",
		patient_name: "Christian Eriksen",
		treatment_title: "Panadol",
		treatment_details: "Panadol cures anything. 3 times a day."
	},
	{
		user_type: "Patient",
		patient_name: "Christian Eriksen",
		treatment_title: "KitKat",
		treatment_details: "Have a break. Have a KitKat."
	}
];

export default class TreatmentPlan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			treatment_plan: treatment_plan_test
		};
	}

	componentDidMount() {
        let patient = this.props.screenProps.userName
        fetch('http://localhost:3005/select * from treatment_plan where patient_name = \'' + patient +
        "\';"
        )
        .then(response => response.json())
        .then(data => this.setState({
            treatment_plan: data
        
        }))
	}

	render() {
        console.log(this.state.treatment_plan)
		if (this.props.screenProps.userType == "patient") {
			return (
				<ScrollView>
					<Text style={styles.headings}>
						Treatment Plan for
					</Text>
					<Text style={styles.name}>
						{this.state.treatment_plan[0].patient_name}
					</Text>
					{this.state.treatment_plan.map(u => {
						return (
							<TreatmentPlanCard
								user_type={this.props.screenProps.userType}
								treatment_title={u.treatment_title}
								treatment_details={u.treatment_details}
							/>
						)
					})}
				</ScrollView>
			)
		} else {
			return (
				<ScrollView>
					<Text h4>
						Treatment Plan for {this.state.treatment_plan[0].patient_name}
					</Text>
					<Button 
						type='outline'
						title="Add Treatment" />
					{this.state.treatment_plan.map(u => {
						return (
							<TreatmentPlanCard
								user_type={u.user_type}
								treatment_title={u.treatment_title}
								treatment_details={u.treatment_details}
							/>
						)
					})}
				</ScrollView>
			)
		}
	}
}

const styles = StyleSheet.create({
    headings: {
        marginHorizontal: 15,
        marginTop: 25,
        // marginBottom: ,
        fontSize: 28,
        fontWeight: 'bold',
        // color: '#000000'
	},
	
	name: {
		marginHorizontal: 15,
        // marginBottom: ,
        fontSize: 25,
        fontWeight: 'bold',
        // color: '#000000'	
	}
})