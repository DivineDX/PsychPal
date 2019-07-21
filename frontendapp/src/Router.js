import React from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import { Icon } from 'native-base';
import SignedOut from './Containers/SignedOut/SignedOut';
import Home from './Containers/Homepage/Home';
import AccountCreationForm from './Containers/AccountCreation/AccountCreationForm';
import Account from './Containers/Account/Account';
import PlannerPatient from './Containers/Planner/PlannerPatient'
import PlannerPsych from './Containers/Planner/PlannerPsych'
import RescheduleOverlay from './Containers/RescheduleOverlay/RescheduleOverlay'
import Search from './Containers/Search/Search'
import TreatmentPatient from './Containers/Treatment/TreatmentPatient'
import TreatmentPsych from './Containers/Treatment/TreatmentPsych'
import AppointmentPatient from './Containers/AppointmentPage/AppointmentPagePatient'
import PatientDetails from './Containers/PatientDetails'
import DoctorCard from './Components/Cards/DoctorCard'

const HomeTab = createBottomTabNavigator( //4 tabs are search, home, treatment and account
	{
		Home: PlannerPatient,
		Search: Search,
		Treatment: TreatmentPatient,
		Account: Account,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = 'home';
				} else if (routeName === 'Search') {
					iconName = 'search';
				} else if (routeName === 'Treatment') {
					iconName = 'medical';
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
);

//To be done later if need arises
/* const PlannerStack = createStackNavigator(
	{
		Main: PlannerPatient,
	},
	{
		initialRouteName: 'Main'
	}
);

const SearchStack = createStackNavigator(
	{
		Main: Search,
	},
	{
		initialRouteName: 'Main'
	}
);

const TreatmentStack = createStackNavigator(
	{
		Main: TreatmentPatient,
	},
	{
		initialRouteName: 'Main'
	}
); */

export const RootNavigator = createSwitchNavigator(
	{
		SignedOut: SignedOut,
		AccountCreation: AccountCreationForm,
		SignedIn: HomeTab,
	},
	{
		initialRouteName: 'SignedOut'
	}
);
