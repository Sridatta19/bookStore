"use strict";

import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from 'store/BookStore';

import {Router} from 'react-router';
import routes from './routes.js'

const store = configureStore();

render(
  <Provider store={store}>
      <Router routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
