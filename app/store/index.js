import { createStore, applyMiddleware, compose } from 'redux'
import { connect } from 'react-redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers';
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import AppNavigator from '../navigations'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['debug'],
  blacklist: ['navState', 'form']
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
const navMiddleware = createReactNavigationReduxMiddleware(
  'template',
  state => {console.log('abc', state)
     return state.navState},
);

export function configStore() {
  const store = createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware, navMiddleware)))
  sagaMiddleware.run(rootSaga)
  const persistor = persistStore(store)
  return { store, persistor }
}

const App = reduxifyNavigator(AppNavigator, 'template');
const mapStateToProps = state => ({
  state: state.navState
});

export default connect(mapStateToProps)(App);
