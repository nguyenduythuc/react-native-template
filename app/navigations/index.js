import { createStackNavigator } from 'react-navigation';
import { PixelRatio, Platform, Dimensions } from 'react-native';
import Auth from '../screens/stack-base/Auth';
import Home from '../screens/stack-base/Home';

const routeConfig = {
  AuthScreen: { screen: Auth },
  HomeScreen: { screen: Home }
};

const extraHeaderConfig =
  PixelRatio.get() <= 2 && Platform.OS === 'ios'
    ? {
        minWidth: 800
      }
    : {};

const { width } = Dimensions.get('window');

const stackNavigatorConfig = {
  initialRouteName: 'AuthScreen',
  mode: 'card', // modal - card
  navigationOptions: {
    gesturesEnabled: true,
    headerTintColor: '#000000',
    headerBackTitle: '',
    headerStyle: {
      backgroundColor: '#000000',
      borderWidth: 0,
      borderBottomColor: 'transparent',
      shadowColor: 'transparent',
      elevation: 0,
      shadowRadius: 0,
      shadowOffset: {
        height: 0
      }
    },
    headerTitleStyle: {
      alignSelf: 'center',
      width: width * 0.86,
      textAlign: 'center',
      fontSize: 19,
      ...extraHeaderConfig
    }
  }
};

const AppNavigator = createStackNavigator(routeConfig, stackNavigatorConfig);

export default AppNavigator;
