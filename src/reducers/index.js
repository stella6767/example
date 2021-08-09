import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import patient from './patient';
import { patientSaga } from './patient';

const rootReducer = combineReducers({
  loading,
  patient,
});

export function* rootSaga() {
  yield all([patientSaga()]);
}

export default rootReducer;
