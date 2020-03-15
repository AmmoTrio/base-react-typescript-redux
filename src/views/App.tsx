import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { Store } from 'redux';
import { IAppState } from '../models/IAppState';
import rootStore from '../redux/rootStore';

import Articles from './components/articles/Articles';

function App() {
  const initialState: Partial<IAppState> = {};
  const store: Store<IAppState> = rootStore(initialState);

  return (
    <Provider store={store}>
      <div className="App container-fluid py-3 w-75 mx-auto">
        <h1>Demo - React + Typescript + Redux</h1>
        <hr/>
        <Articles/>
      </div>
    </Provider>
  );
}

export default App;
