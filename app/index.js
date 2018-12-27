import React, { PureComponent } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { configStore } from './store/index';
import RootScreen from './screens/root';
import { testRedux } from './actions/debug';

const { store, persistor } = configStore();

export default class App extends PureComponent {
  componentDidMount() {
    store.dispatch(testRedux());
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    );
  }
}
