import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import SignedOut from './Containers/SignedOut/SignedOut';
import Home from './Containers/Homepage/Home';
import AccountCreationForm from './Containers/AccountCreation/AccountCreationForm';
import PersonalParticulars from './Containers/AccountCreation/PersonalParticulars';
import PatientForm from './Containers/AccountCreation/PatientForm';
import PsychiatristForm from './Containers/AccountCreation/PsychiatristForm';
import PlannerPatient from './Containers/Planner/PlannerPatient'
import PlannerPsych from './Containers/Planner/PlannerPsych'
import RescheduleOverlay from './Containers/RescheduleOverlay/RescheduleOverlay'
import Search from './Containers/Search/Search'
import TreatmentPatient from './Containers/Treatment/TreatmentPatient'
import TreatmentPsych from './Containers/Treatment/TreatmentPsych'
import AppointmentPatient from './Containers/AppointmentPage/AppointmentPagePatient'
import PatientDetails from './Containers/PatientDetails'
import PickerCountry from './Components/Input/PickerCountry';
import TempFooter from './Containers/TempFooter';
export const HomeStack = createStackNavigator(
	{
		Home: Home,
		PersonalParticulars: PersonalParticulars,
		PatientForm: PatientForm,
		PsychiatristForm: PsychiatristForm,
		PlannerPatient: PlannerPatient,
		PlannerPsych: PlannerPsych,
		RescheduleOverlay: RescheduleOverlay,
		Search: Search,
		TreatmentPatient: TreatmentPatient,
		TreatmentPsych: TreatmentPsych,
		AppointmentPatient: AppointmentPatient,
		PatientDetails: PatientDetails,
		PickerCountry: PickerCountry,
		TempFooter: TempFooter,
	},
	{
		initialRouteName: 'Home',
	}
);

export const SignedOutStack = createStackNavigator(
	{
		RootPage: SignedOut,
		AccountCreation: AccountCreationForm,
		SignIn: HomeStack
	},
	{
		initialRouteName: 'RootPage',
	}
);

export const RootNavigator = createSwitchNavigator(
	{
		SignedOut: SignedOutStack,
		SignedIn: HomeStack,
	},
	{
		initialRouteName: 'SignedOut'
	}
);
