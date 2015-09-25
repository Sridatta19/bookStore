"use strict";

import React,{Component} from 'react';
import DocumentTitle from 'react-document-title';

export default class Profile extends Component {
  render() {
    return (
      <DocumentTitle title='Profile Page'>
        <div className="container">
          <h1>Profile</h1>
          <div id="about-excerpt">
            <p>“A joker is a little fool who is different from everyone else. He's not a club, diamond, heart, or spade. He's not an eight or a nine, a king or a jack. He is an outsider. He is placed in the same pack as the other cards, but he doesn't belong there. Therefore, he can be removed without anybody missing him.”' </p>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
