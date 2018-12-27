import { createStackNavigator } from 'react-navigation';
import Auth from '../screens/stack-base/Auth'
import Home from '../screens/stack-base/Home'

const routeConfig = {
  AuthScreen: {screen: Auth},
  HomeScreen: {screen: Home}
}

const stackNavigatorConfig = {
    initialRouteName: 'AuthScreen'
  };
  
  const AppNavigator = createStackNavigator(routeConfig, stackNavigatorConfig)
  
  export default AppNavigator
  