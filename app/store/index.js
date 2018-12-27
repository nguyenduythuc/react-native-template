import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import { navReducer, navMiddleware } from '../navigations';
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['debug'],
  blacklist: ['navState', 'form']
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducer, navReducer)
const sagaMiddleware = createSagaMiddleware()

export function configStore() {
  const store = createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware, navMiddleware)))
  sagaMiddleware.run(rootSaga)
  const persistor = persistStore(store)
  return { store, persistor }
}
