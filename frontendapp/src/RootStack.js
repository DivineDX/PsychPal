import { createStackNavigator} from "react-navigation";
import LoginPage from './Containers/LoginPage/LoginPage';
import Planner from './Containers/Planner/Planner';

const RootStack = createStackNavigator(
    {
      Home: LoginPage,
      Planner: Planner,
    },
    {
      initialRouteName: 'Home',
    }
  );

export default RootStack;