import { createStore } from 'redux';
import { ICartState } from './modules/cart/types';
import rootreducer from './modules/rootreducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootreducer,
    composeWithDevTools()
  );

export interface IState {
  cart: ICartState;
}

export default store;