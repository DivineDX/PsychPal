import { createStackNavigator } from "react-navigation";
import StartPage from './Containers/StartPage/StartPage';
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

const RootStack = createStackNavigator(
	{
		Home: StartPage,
		AccountCreation: AccountCreationForm,
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
	},
	{
		initialRouteName: 'PsychiatristForm',
	}
);

export default RootStack;