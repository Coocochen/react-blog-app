import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import mySaga from './sagas';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);


export default store;