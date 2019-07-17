import { createStackNavigator} from "react-navigation";
import StartPage from './Containers/StartPage/StartPage';
import AccountCreationForm from './Containers/AccountCreation/AccountCreationForm';
import PersonalParticulars from './Containers/ParticularsForm/PersonalParticulars';
import PlannerPatient from './Containers/Planner/PlannerPatient'
import PlannerPsych from './Containers/Planner/PlannerPsych'
import RescheduleOverlay from './Containers/RescheduleOverlay/RescheduleOverlay'
import Search from './Containers/Search/Search'
import TreatmentPatient from './Containers/Treatment/TreatmentPatient'
import TreatmentPsych from './Containers/Treatment/TreatmentPsych'
import AppointmentPatient from './Containers/AppointmentPage/AppointmentPagePatient'
import PatientDetails from './Containers/PatientDetails'

const RootStack = createStackNavigator(
    {
      Home: StartPage,
      AccountCreation: AccountCreationForm,
      PersonalParticulars: PersonalParticulars,
      PlannerPatient: PlannerPatient,
      PlannerPsych: PlannerPsych,
      RescheduleOverlay: RescheduleOverlay,
      Search: Search,
      TreatmentPatient: TreatmentPatient,
      TreatmentPsych: TreatmentPsych,
      AppointmentPatient: AppointmentPatient,
      PatientDetails: PatientDetails
    },
    {
      initialRouteName: 'PatientDetails',
    }
  );

export default RootStack;