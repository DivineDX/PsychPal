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



// import SignedOut from './Containers/SignedOut/SignedOut';
// import Planner from './Containers/Planner/Planner';
// import AccountCreationForm from './Containers/AccountCreation/AccountCreationForm';
// import Account from './Containers/Account/Account';
// import PlannerPatient from './Components/Planner/PlannerPatient'
// import PlannerPsych from './Components/Planner/PlannerPsych'
// import RescheduleOverlay from './Containers/RescheduleOverlay/RescheduleOverlay'
// import Search from './Containers/Search/Search'
// import TreatmentPatient from './Containers/Treatment/TreatmentPatient'
// import TreatmentPsych from './Containers/Treatment/TreatmentPsych'
// import AppointmentPatient from './Containers/AppointmentPage/AppointmentPagePatient'
// import PatientDetails from './Containers/PatientDetails'
// import DoctorCard from './Components/Cards/DoctorCard'

const HomeTab = createBottomTabNavigator( //4 tabs are search, home, treatment and account
	{
		Home: Planner,
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
