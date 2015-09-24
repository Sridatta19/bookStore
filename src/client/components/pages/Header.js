
import React,{Component} from 'react';

export default class Header extends Component{

    render() {
        return (
          <div className="container">
      			<header className="main">
      				<nav>
      					<ul className="clearfix">
      						<li><a href="">About</a></li>
      						<li><a href="">Browse Books</a></li>

      						<li id="logo"><a href="" title="Return to Shoppe">Book Store</a></li>

      						<li><a href="">Browse Authors</a></li>
      						<li><a href="">Profile</a></li>
      					</ul>
      				</nav>
      			</header>
      		</div>
        );
    }
}
