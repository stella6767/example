import faker from 'faker';
import {
  call,
  delay,
  put,
} from 'redux-saga/effects';
import shortId from 'shortid';
import {
  finishLoading,
  startLoading,
} from '../reducers/loading';

export const createRequestActionTypes = (
  type,
) => {
  const REQUEST = `${type}_REQUEST`;
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [REQUEST, SUCCESS, FAILURE];
};

export default function createFakeRequestSaga(
  type,
  request,
) {
  const SUCCESS = type.replace(
    /REQUEST/g,
    'SUCCESS',
  );
  const FAILURE = type.replace(
    /REQUEST/g,
    'FAILURE',
  );

  return function* (action) {
    yield put(startLoading(type)); //로딩 시작

    try {
      //const response = yield call(request, action.payload); //api 호출
      //console.log('api 호출 성공: ', type, action);
      yield delay(100);

      console.log(
        'fake Data:',
        //generateDummyPost(action.payload),
        generateDummyPatientList(action.payload),
      );

      yield put({
        type: SUCCESS,
        payload: generateDummyPatientList(
          action.payload,
        ),
      });
    } catch (e) {
      const errorData = e.response.data;
      console.error('errorData는', errorData);

      yield put({
        type: FAILURE,
        payload: errorData,
        error: true,
      });
    }
    yield put(finishLoading(type)); //로딩 끝
  };
}

const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      content: faker.lorem.paragraph(),
    }));

//이거 patient manager 하실 때 키값도 같이 주세요.
const generateDummyPatientList = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      name: faker.name.findName(),
      lastSession: 'Last session',
      gender: faker.name.gender(),
      age: faker.datatype.number(),
      height: faker.datatype.number(),
      weight: faker.datatype.number(),
    }));
