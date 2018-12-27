/**
 * @flow
 * Various action creator for common use cases.
 */

'use strict';

import Types from './types';

export const testRedux = () => {
  return {
    type: Types.TEST
  }
};

export const saveDebug = () => {
  return {
    type: Types.SAVEDEBUG,
    data: true
  }
};
