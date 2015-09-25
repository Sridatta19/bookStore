'use strict';

import React,{Component} from 'react';

export default class Poster extends Component{

    render() {
        return (
          <div id="Poster">
            <div className="container">
              <img src="images/book-shop.png" alt="Library" />
              <p className="large-ribbon">Fresh Whole Ingredients</p>
            </div>
          </div>
        );
    }
}
