import _ from 'lodash';
import { takeLatest } from 'redux-saga/effects';
import Types from '../actions/types';
import { debug } from './debug-saga';

const debounced = _.debounce(fakeFunction, 3000);

function fakeFunction() {}

export default function* rootSaga() {
  yield [
    takeLatest(Types.TEST, debug)
  ];
}
