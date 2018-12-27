/* Redux */
import { connect } from 'react-redux';
import reducer from './reducer';

/* Routes */
import routes from './routes';
const { navReducer, navMiddleware, App } = reducer(routes);

const mapStateToProps = state => ({
  state: state.navState,
  dispatch: state.dispatch
});

const AppNavigator = connect(mapStateToProps)(App);

export { AppNavigator, navReducer, navMiddleware };