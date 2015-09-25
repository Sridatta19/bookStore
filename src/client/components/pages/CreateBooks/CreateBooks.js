'use strict';

import React, {Component, PropTypes} from 'react';
import {Input, Button} from 'react-bootstrap';

class CreateBooks extends Component {

  constructor(props){
    super(props);
    this.state = { title: "", author: "", publisher: "" }
  }

  _titleChange = (evt) => {
    this.setState({title: evt.target.value});
  }

  _authorChange = (evt) => {
    this.setState({author: evt.target.value});
  }

  _publisherChange = (evt) => {
    this.setState({author: evt.target.value});
  }

  render() {
    return (
      <div>
        <h3>Add a Book</h3>
        <hr/>
        <p>
          <input type="text" placeholder="Enter Book Title Here" value={this.state.title} onChange={this._titleChange}/>
          <input type="text" placeholder="Enter Book Author Here" value={this.state.author} onChange={this._authorChange}/>
          <input type="text" placeholder="Enter Book Publisher Here" value={this.state.publisher} onChange={this._publisherChange}/>
          <Button bsStyle="primary" onClick={this._createBook}>Create</Button>
        </p>
      </div>
    );
  }
}

export default CreateBooks;
