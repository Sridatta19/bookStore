
import React, {Component} from 'react';
import Introboard from './Introboard';
import Newsboard from './Newsboard';

export default class Dashboard extends Component{

    render() {
        return (
          <div className="container">
            <Introboard />
            <br/>
            <Newsboard />
            <br/>
          </div>
        );
    }
}
