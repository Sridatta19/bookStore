'use strict';

import React,{Component} from 'react';
import {Link} from 'react-router';

export default class BookSidebar extends Component {

  render() {
    let {books} = this.props;
    return (
      <div>
        <h3>List of Book Titles</h3>
        <ul>
          {books.map(book =>
            <li><Link to={`/books/list/${book.id}`}>{book.title}</Link></li>
          )}
        </ul>
      </div>
    );
  }
};
