'use strict';

import React, {Component} from 'react';
import Introboard from './Introboard';
import Newsboard from './Newsboard';
import Poster from './Poster';

export default class Dashboard extends Component{

    render() {
        return (
          <div>
            <Poster />
            <div className="container">
              <Introboard />
              <br/>
              <Newsboard />
              <br/>
            </div>
          </div>
        );
    }
}
