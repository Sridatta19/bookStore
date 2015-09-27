'use strict';

import React,{Component} from 'react';

export default class CreateBookSidebar extends Component {

  render() {
    let {books} = this.props;
    return (
      <div>
        <h3>Recently Created</h3>
        <ul>
          {books.map(book =>
            <li>{book.title}</li>
          )}
        </ul>
      </div>
    );
  }
};
