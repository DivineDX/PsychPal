import { createStackNavigator} from "react-navigation";
import StartPage from './Containers/StartPage/StartPage';
import Planner from './Containers/Planner/Planner';
import AccountCreationForm from './Containers/AccountCreation/AccountCreationForm';
import PlannerPsych from './Containers/PlannerPsych';
import PersonalParticulars from './Containers/ParticularsForm/PersonalParticulars';

const RootStack = createStackNavigator(
    {
      Home: StartPage,
      Planner: Planner,
      AccountCreation: AccountCreationForm,
      PlannerPsych: PlannerPsych,
      PersonalParticulars: PersonalParticulars,
    },
    {
      initialRouteName: 'PersonalParticulars',
    }
  );

export default RootStack;