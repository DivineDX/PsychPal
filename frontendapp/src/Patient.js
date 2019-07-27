import React, { Component } from 'react'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import PlannerStack from './Containers/CommonUI/Planner'
import Search from './Containers/PatientUI/Search'
import TreatmentPlan from './Containers/PatientUI/TreatmentPlan'
import AccountSettings from './Containers/CommonUI/AccountSettings/AccountSettings'
import { Icon } from 'native-base';

 
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
		let userType = navigation.getParam('type')
		return (
			<PatientTab 
			style = {{margin: 20}}
			screenProps={{
				patientName: navigation.getParam('patientName')
			}} />
		)
	}
}