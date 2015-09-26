"use strict";

import React,{Component, PropTypes} from 'react';
import DocumentTitle from 'react-document-title';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as BookActions from '../../actions/BookActions'

import Header from './home/Header';
import Footer from './home/Footer';
import Dashboard from './home/Dashboard';

require('../styles/main.less');
require('../styles/normalize.less');
require('../styles/fonts.css');

class Main extends Component {
    render() {
      const { books, dispatch } = this.props;
      const actions = bindActionCreators(BookActions, dispatch);

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

Main.propTypes = {
  books: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(Main);
