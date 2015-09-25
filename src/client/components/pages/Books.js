"use strict";

import React,{Component} from 'react';
import {Link} from 'react-router';

import DocumentTitle from 'react-document-title';
import Poster from '../home/Poster';
import CreateBookSidebar from './CreateBooks/CreateBookSidebar';
import CreateBooks from './CreateBooks/CreateBooks';


export default class Books extends Component {
  render() {
    var bookId = this.props.params.bookPath;
    return (
      <DocumentTitle title='Books Catalogue'>
        <div className="container">
          <h1 className="bookNav">
            <ul className="clearfix">
              <li><Link to="/books/list">Books</Link></li>
              <li><Link to="/books/create">Create</Link></li>
            </ul>
          </h1>
          {bookId && bookId=='create' ? (
            <div style={{minHeight: 350}} className="container">
              <div className='sidebarStyle'>
                <CreateBookSidebar />
              </div>
              <div style={{padding: 20}}>
                <CreateBooks />
              </div>
            </div>
          ) : null}
        </div>
      </DocumentTitle>
    );
  }
}
