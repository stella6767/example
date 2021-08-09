import {
  applyMiddleware,
  createStore,
} from 'redux';
import rootReducer, {
  rootSaga,
} from '../reducers';
import createSagaMiddleware from 'redux-saga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );
  //store.sagaTask = sagaMiddleware.run(rootSaga);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
