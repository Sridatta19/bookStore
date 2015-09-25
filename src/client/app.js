"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import {Router} from 'react-router';
import routes from './routes.js'

ReactDOM.render((
  <Router routes={routes} />
), document.getElementById('app'));