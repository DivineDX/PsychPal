import React from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import { Icon } from 'native-base';

// import from CommonUI

import LoginContainer from './Containers/CommonUI/LoginContainer/LoginContainer'
import AccountCreation from './Containers/CommonUI/AccountCreation'
import AccountSettings from './Containers/CommonUI/AccountSettings/AccountSettings'
import Planner from './Containers/CommonUI/Planner'
import SignedOut from './Containers/CommonUI/SignedOut'


// import from PatientUI
import Search from './Containers/PatientUI/Search'
import TreatmentPlan from './Containers/PatientUI/TreatmentPlan'

// import from PsychUI
import PatientRecords from './Containers/PsychUI/PatientRecords'

// import from Components
import InputBox from './Components/Input/InputBox'
import RequestReschedule from './Components/RequestReschedule'
import ScheduleNextAppointment from './Components/ScheduleNextAppointment'
import PlannerMoreDetails from './Components/Planner/PlannerMoreDetails'
import AddTreatment from './Components/AddTreatment'
import MedicalRecord from './Components/MedicalRecord'
import PatientRecordsMoreDetails from './Components/PatientRecordsMoreDetails'
import DoctorProfile from './Components/DoctorProfile'
import ChangePassword from './Components/ChangePassword'
import CreateAppointmentLog from './Components/CreateAppointmentLog'


const PlannerStack = createStackNavigator(
	{
		Main: DoctorProfile
	},
	{
		initialRouteName: 'Main'
	}
);

const HomeTab = createBottomTabNavigator( // 4 Tabs - Planner, Search, Treatment, Account
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
);

export const RootNavigator = createSwitchNavigator(
	{
		SignedOut: SignedOut,
		AccountCreation: AccountCreation,
		SignedIn: HomeTab,
	},
	{
		initialRouteName: 'SignedOut'
	}
);

//To be done later if need arises


/*

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

