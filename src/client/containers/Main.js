"use strict";

import React,{Component} from 'react';
import DocumentTitle from 'react-document-title';

import Header from 'client/components/home/Header';
import Footer from 'client/components/home/Footer';
import Dashboard from 'client/components/home/Dashboard';

require('client/styles/main.less');
require('client/styles/normalize.less');
require('client/styles/fonts.css');

export default class Main extends Component {
    render() {
        return (
          <DocumentTitle title='Books Awesome | Comics, Books Shoppe'>
          <div>
            <Header />
            {this.props.children || <Dashboard />}
            <Footer />
          </div>
          </DocumentTitle>
        );
    }
}
