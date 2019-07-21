import React from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import { Icon } from 'native-base';

// import from CommonUI
import InputBox from './Containers/CommonUI/LoginContainer/InputBox'
import LoginContainer from './Containers/CommonUI/LoginContainer/LoginContainer'
import AccountCreationForm from './Containers/CommonUI/AccountCreationForm'
import AccountSettings from './Containers/CommonUI/AccountSettings'
import Planner from './Containers/CommonUI/Planner'
import PlannerMoreDetails from './Containers/CommonUI/PlannerMoreDetails'
import RescheduleOverlay from './Containers/CommonUI/RescheduleOverlay'
import SignedOut from './Containers/CommonUI/SignedOut'
import TreatmentPlan from './Containers/CommonUI/TreatmentPlan'

// import from PatientUI
import Search from './Containers/PatientUI/Search'

// import from PsychUI
import AddTreatment from './Containers/PsychUI/AddTreatment'
import PatientRecords from './Containers/PsychUI/PatientRecords'
import PatientRecordsMoreDetails from './Containers/PsychUI/PatientRecordsMoreDetails'

// import from Components
import PlannerPatient from './Components/Planner/PlannerPatient'
import PlannerPsych from './Components/Planner/PlannerPsych'
import PlannerMoreDetailsPatient from './Components/PlannerMoreDetails/PlannerMoreDetailsPatient'
import PlannerMoreDetailsPsych from './Components/PlannerMoreDetails/PlannerMoreDetailsPsych'
import TreatmentPlanPatient from './Components/TreatmentPlan/TreatmentPlanPatient'
import TreatmentPlanPsych from './Components/TreatmentPlan/TreatmentPlanPsych'


const HomeTab = createBottomTabNavigator( // 4 Tabs - Planner, Search, Treatment, Account
	{
		Planner: Planner,
		Search: Search,
		Treatment: TreatmentPlanPatient,
		Account: AccountSettings,
	},
	{
		initialRouteName: 'Planner',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Planner') {
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
const PlannerStack = createStackNavigator(
	{
		Main: Planner,
	},
	{
		initialRouteName: 'Main'
	}
);

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
