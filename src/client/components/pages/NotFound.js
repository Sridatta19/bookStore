'use strict';

import React,{Component} from 'react';
import DocumentTitle from 'react-document-title';

export default class NotFound extends Component {

  render() {
    return (
      <DocumentTitle title='404 Page Not Found'>
        <div>
          <h1>Bazinga!!!</h1>
          <p>You have just reached LIMBO</p>
        </div>
      </DocumentTitle>
    );
  }

}
