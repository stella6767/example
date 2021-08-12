import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import patient from './patient';
import test, { testSaga } from './test';
import { patientSaga } from './patient';

const rootReducer = combineReducers({
  loading,
  patient,
  test,
});

export function* rootSaga() {
  yield all([patientSaga(), testSaga()]);
}

export default rootReducer;
