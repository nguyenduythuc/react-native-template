import { reducer as formReducer } from 'redux-form'
import { debug } from './debug'

const rootReducer = {
  form: formReducer,
  debug
};

export default rootReducer
