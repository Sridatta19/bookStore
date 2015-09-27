"use strict";

import React from 'react';
import Route from 'react-router';

import Main from './containers/Main';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import Books from './components/pages/Books';
import Authors from './components/pages/Authors';

export default (
  <Route path="/" component={Main}>
    <Route path="about" component={About} />
    <Route path="profile" component={Profile} />
    <Route path="books(/:bookPath)(/:bookId)" component={Books} />
    <Route path="authors" component={Authors} />
    <Route path="*" component={NotFound} />
  </Route>
);
