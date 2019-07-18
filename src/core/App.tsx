import React, { useReducer } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { GlobalStyle } from './styled/global';
import { Routes } from './Routes';
import { IContext, IStore, reducer } from './Store';

export const history = createBrowserHistory({ basename: '/' });
export const Context = React.createContext<IContext>(null);

const initialState: IStore = {
  order: null,
};

export function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ dispatch, store }}>
      <GlobalStyle />
      <Router history={history}>
        <Routes />
      </Router>
    </Context.Provider>
  );
}
