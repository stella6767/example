import { takeLatest } from '@redux-saga/core/effects';
import React from 'react';
import {
  createAction,
  handleActions,
} from 'redux-actions';
import * as testAPI from '../lib/api/test';
import {
  createRequestActionTypes,
  createRequestSaga,
} from '../lib/createRequestSaga';

const initialState = {
  done: false,
  error: null,
  data: null,
};

const [TEST_REQUST, TEST_SUCCESS, TEST_FAILURE] =
  createRequestActionTypes('TEST');

//액션 생성 함수
export const testAction =
  createAction(TEST_REQUST);

//사가 생성
const getTestSaga = createRequestSaga(
  TEST_REQUST,
  testAPI.connectTest,
);

export function* testSaga() {
  //이벤트 리스너!
  yield takeLatest(TEST_REQUST, getTestSaga);
}

//리듀서
const test = handleActions(
  {
    [TEST_SUCCESS]: (
      state,
      { payload: data },
    ) => ({
      ...state,
      done: true,
      data: data,
    }),
    [TEST_FAILURE]: (
      state,
      { payload: error },
    ) => ({
      ...state,
      error: error,
    }),
  },
  initialState,
);

export default test;
