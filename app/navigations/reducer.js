import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
    reduxifyNavigator
  } from 'react-navigation-redux-helpers';
  
  export default (AppNavigator) => {
    const navReducer = createNavigationReducer(AppNavigator);
    const navMiddleware = createReactNavigationReduxMiddleware(
      'template',
      state => state.navState,
    );
    const App = reduxifyNavigator(AppNavigator, 'template');
    console.log(App)
  
    return { navReducer, navMiddleware, App };
  };