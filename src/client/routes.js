"use strict";

import React from 'react';
import Route from 'react-router';

import Main from './components/Main';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Profile from './components/pages/Profile';

export default (
  <Route path="/" component={Main}>
    <Route path="about" component={About} />
    <Route path="profile" component={Profile} />
    <Route path="*" component={NotFound} />
  </Route>
);
