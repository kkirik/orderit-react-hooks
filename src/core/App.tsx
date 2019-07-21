import React, { useEffect, useReducer } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import Context from 'src/core/AppContext';

import { GlobalStyle } from './styled/global';
import { Routes } from './Routes';
import { IStore, reducer } from './Store';
import { User } from './models/Profile';

export const history = createBrowserHistory({ basename: '/' });

const initialState: IStore = {
  order: null,
  user: null,
};

export function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function load() {
      const res = await axios.get<User>('/api/users/1');

      dispatch({ type: 'loadUsers', user: new User(res.data) });
    }

    load();
  }, []);

  return (
    <Context.Provider value={{ dispatch, store }}>
      <GlobalStyle />
      <Router history={history}>
        <Routes />
      </Router>
    </Context.Provider>
  );
}
