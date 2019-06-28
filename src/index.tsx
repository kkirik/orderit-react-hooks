import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './core/App';

const root = document.querySelector('#root');

ReactDOM.render(<App />, root);
