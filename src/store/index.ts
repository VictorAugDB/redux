import { applyMiddleware, createStore } from 'redux';
import { ICartState } from './modules/cart/types';
import CreateSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootreducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = CreateSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootreducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(rootSaga);

export default store;