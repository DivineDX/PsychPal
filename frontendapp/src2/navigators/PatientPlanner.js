import React, { Component } from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Planner from '../Containers/CommonUI/Planner';
import PlannerMoreDetails from '../Components/Planner/PlannerMoreDetails';


//switch navigator for patient tab page
const PatientPlannerTab = createAppContainer(createStackNavigator(
    {
		planner: Planner,
        moreDetails: PlannerMoreDetails
        
	},
	{
		initialRouteName: 'planner',
    }
))
 
export default class patientSearch extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<PatientPlannerTab 
			style = {{margin: 20}}
			screenProps={{
				userName: this.props.screenProps.userName,
				userType: this.props.screenProps.userType
			}} />
		)
	}
}