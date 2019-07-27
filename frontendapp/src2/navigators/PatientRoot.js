import React, { Component } from 'react'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import PlannerStack from './PatientPlanner'
import Search from './PatientSearch'
import TreatmentPlan from './PatientTreatment'
import AccountSettings from './OverallAccountSettings'
import { Icon } from 'native-base';

//tab navigator for patient route
const PatientTab = createAppContainer(createBottomTabNavigator(
    {
		Planner: PlannerStack,
		Search: Search,
		Treatment: TreatmentPlan,
		Account: AccountSettings,
	},
	{
		initialRouteName: 'Planner',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Planner') {
					iconName = 'calendar';
				} else if (routeName === 'Search') {
					iconName = 'search';
				} else if (routeName === 'Treatment') {
					iconName = 'medkit';
				} else if (routeName === 'Account') {
					iconName = 'person';
				}
				return <Icon name={iconName} size={25} color={tintColor} />;
			},
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
    }
))
 
export default class patient extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		const {navigation} = this.props 
		console.log(navigation.getParam('patientName'))
		return (
			<PatientTab 
			style = {{margin: 20}}
			screenProps={{
				userName: navigation.getParam('patientName'),
				userType: 'Patient'
			}} />
		)
	}
}