/**
 * @flow
 */

'use strict';

import Types from '../actions/types';

const INITIAL_STATE = {
  debug: false
};

export const debug = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SAVEDEBUG:
      delete action.type;
      return {
        ...state,
        debug: action.data
      }
    default:
      return state;
  }
};
