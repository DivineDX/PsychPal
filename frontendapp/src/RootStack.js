import { createStackNavigator} from "react-navigation";
import StartPage from './Containers/StartPage/StartPage';
import Planner from './Containers/Planner/Planner';
import AccountCreationForm from './Containers/AccountCreation/AccountCreationForm';

const RootStack = createStackNavigator(
    {
      Home: StartPage,
      Planner: Planner,
      AccountCreation: AccountCreationForm
    },
    {
      initialRouteName: 'Home',
    }
  );

export default RootStack;