"use strict";

import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BookActions from 'actions/BookActions';
import _ from 'lodash';

import DocumentTitle from 'react-document-title';
import Poster from '../home/Poster';
import CreateBookSidebar from './Books/CreateBookSidebar';
import CreateBooks from './Books/CreateBooks';
import BookSidebar from './List/BookSidebar';
import BooksList from './List/BooksList';

class Books extends Component {

  render() {
    const { books, dispatch } = this.props;
    const actions = bindActionCreators(BookActions, dispatch);
    const { bookPath, bookId } = this.props.params;
    let bookDetail = bookId ? _.find(books,'id',Number(bookId)) : null;

    return (
      <DocumentTitle title='Books Catalogue'>
        <div className="container">
          <h1 className="bookNav">
            <ul className="clearfix">
              <li><Link to="/books/list">Books</Link></li>
              <li><Link to="/books/create">Create</Link></li>
            </ul>
          </h1>
          {bookPath && bookPath=='create' ? (
            <div style={{minHeight: 350}} className="container">
              <div className='sidebarStyle'>
                <CreateBookSidebar books={books}/>
              </div>
              <div style={{padding: 20}}>
                <CreateBooks addBook={actions.addBook} />
              </div>
            </div>
          ) : null}
          {bookPath && bookPath=='list' ? (
            <div style={{minHeight: 350}} className="container">
              <div className='sidebarStyle'>
                <BookSidebar books={books}/>
              </div>
              {bookId ? (
                <div style={{padding: 20}}>
                  <BooksList book={bookDetail} deleteBook={actions.deleteBook}/>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </DocumentTitle>
    );
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(Books);
