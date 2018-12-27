/**
 * @flow
 */

'use strict';

import { delay } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import { saveDebug } from '../actions/debug';

export function* debug(action) {
  yield delay(300);
  const { debug } = yield select();
  console.log(debug)
  yield put(saveDebug())
}
