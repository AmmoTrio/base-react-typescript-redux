import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { IAppState } from '../models/IAppState';
import rootReducer from './rootReducer';

export default function rootStore(initialState: Partial<IAppState>): Store<IAppState> {
  const store: Store<IAppState> = createStore(
    rootReducer(),
    initialState as any,
    applyMiddleware(thunk));
  return store;
}
