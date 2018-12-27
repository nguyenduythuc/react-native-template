/**
 * @flow
 * Various action creator for common use cases.
 */

import Types from './types';

export const testRedux = () => ({
  type: Types.TEST
});

export const saveDebug = () => ({
  type: Types.SAVEDEBUG,
  data: true
});
