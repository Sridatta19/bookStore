'use strict';

import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default class BooksList extends Component {

  _deleteBook = () => {
    this.props.deleteBook(this.props.book.id);
  }

  render() {
    let {book} = this.props;
    return (
      <div>
        <h3>Book Details</h3>
        <hr/>
        <ul style={{listStyle: 'none'}}>
          <li>{book.title}</li>
          <li>{book.author}</li>
          <li>{book.publisher}</li>
        </ul>
        <Button bsStyle="primary" onClick={this._deleteBook}><Link to="/books/list">Delete Book</Link></Button>
      </div>
    );
  }
}
