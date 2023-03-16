import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { workersReducer as rootReducer } from './reducer';
import { workersSaga as rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
