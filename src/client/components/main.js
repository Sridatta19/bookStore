"use strict";

import React,{Component} from 'react';
import Header from './home/Header';
import Footer from './home/Footer';
import Dashboard from './home/Dashboard';
import DocumentTitle from 'react-document-title';

require('../styles/main.less');
require('../styles/normalize.less');
require('../styles/fonts.css');

export default class Main extends Component{

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
