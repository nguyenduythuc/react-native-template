import { reducer as formReducer } from 'redux-form';
import { debug } from './debug';
import { navState } from './navigation';

const rootReducer = {
  form: formReducer,
  debug,
  navState
};

export default rootReducer;
