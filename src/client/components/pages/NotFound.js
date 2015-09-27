'use strict';

import React,{Component} from 'react';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';

export default class NotFound extends Component {

  render() {
    return (
      <DocumentTitle title='404 Page Not Found'>
        <div className="container">
          <h1>Bazinga!!!</h1>
          <img style={{'paddingLeft':'175px'}} src="images/Errorpage.png" alt="404 Not Found" />
          <div id="about-excerpt">
            <p>You have just reached LIMBO. Click here to go to <Link to="/">Home Page</Link></p>
          </div>
        </div>
      </DocumentTitle>
    );
  }

}
