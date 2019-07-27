import React, { Component } from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import search from '../Containers/PatientUI/Search'
import doctorDetails from '../Components/DoctorProfile'

//switch navigator for patient search page
const PatientSearchTab = createAppContainer(createStackNavigator(
    {
        Search: search,
        DoctorDetails: doctorDetails
        
	},
	{
		initialRouteName: 'Search',
    }
))
 
export default class patientSearch extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<PatientSearchTab 
			style = {{margin: 20}}
			screenProps={{
				patientName: this.props.screenProps.userName
			}} />
		)
	}
}