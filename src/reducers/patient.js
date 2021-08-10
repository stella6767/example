import {
  createAction,
  handleActions,
} from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createFakeRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const PATIENTS_LIST_INIT = 'PATIENTS_LIST_INIT';

const [
  LOAD_PATIENTS_REQUEST,
  LOAD_PATIENTS_SUCCESS,
  LOAD_PATIENTS_FAILURE,
] = createRequestActionTypes('LOAD_PATIENTS');

export const patientsListInitAction =
  createAction(PATIENTS_LIST_INIT);

export const loadPatientsAction = createAction(
  LOAD_PATIENTS_REQUEST,
  (data) => data,
);

const loadPatientsSaga = createFakeRequestSaga(
  LOAD_PATIENTS_REQUEST,
  '',
);

export function* patientSaga() {
  //이벤트 리스너!
  yield takeLatest(
    LOAD_PATIENTS_REQUEST,
    loadPatientsSaga,
  );
}

const initialState = {
  loadPatientsDone: false,
  loadPatientsError: null,

  patientsPosts: [],
};

const patient = handleActions(
  {
    //초기화
    [PATIENTS_LIST_INIT]: (state) => ({
      ...state,
      patientsPosts: [],
    }),

    [LOAD_PATIENTS_REQUEST]: (
      state,
      { payload: data },
    ) => ({
      ...state,
      loadPatientsError: null,
      loadPatientsDone: false,
    }),
    [LOAD_PATIENTS_SUCCESS]: (
      state,
      { payload: data },
    ) => ({
      ...state,
      loadPatientsError: null,
      loadPatientsDone: true,
      patientsPosts:
        state.patientsPosts.concat(data),
    }),
    // 회원가입 실패
    [LOAD_PATIENTS_FAILURE]: (
      state,
      { payload: error },
    ) => ({
      ...state,
      loadPatientsError: error,
    }),
  },
  initialState,
);

export default patient;
