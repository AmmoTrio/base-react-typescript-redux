import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { IAppState } from '../models/IAppState';
import { articlesReducer } from './articles/reducer';

export default function rootReducer(): Reducer<IAppState> {
  
  const reducerMap: ReducersMapObject<IAppState> = {
    articles: articlesReducer,
  };

  return combineReducers(reducerMap);
}
