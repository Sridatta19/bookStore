'use strict';

import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

    render() {
        return (
          <div className="container">
      			<header className="main">
      				<nav>
      					<ul className="clearfix">
      						<li><Link to="/about">About</Link></li>
      						<li><Link to="/">Browse Books</Link></li>

      						<li id="logo"><Link to="/">Book Store</Link></li>

      						<li><Link to="/">Browse Authors</Link></li>
      						<li><Link to="/profile">Profile</Link></li>
      					</ul>
      				</nav>
      			</header>
      		</div>
        );
    }
}
