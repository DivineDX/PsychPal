import React, { Component } from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import TreatmentPlan from '../Containers/PatientUI/TreatmentPlan'
import doctorDetails from '../Components/AddTreatment'

//switch navigator for patient treatment page
const PatientTreatmentTab = createAppContainer(createStackNavigator(
    {
        Treatment: TreatmentPlan,
        AddTreatment: doctorDetails,
        //RemoveTreatment: 
        
	},
	{
		initialRouteName: 'Treatment',
    }
))
 
export default class patientTreatment extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<PatientTreatmentTab 
			style = {{margin: 20}}
			screenProps={{
                userName: this.props.screenProps.userName,
                userType: this.props.screenProps.userType
			}} />
		)
	}
}

