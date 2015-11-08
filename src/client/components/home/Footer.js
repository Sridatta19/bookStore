'use strict';

import React,{Component} from 'react';

export default class Footer extends Component{

    render() {
        return (
          <footer className="main">
      			<div className="container clearfix">

      				<div id="uncopyright">
      					<p>Copyright &copy; 2013 <strong>Brad Hussey</strong></p>
      					<p>Code re-used for learning purposes</p>
      				</div>

      				<div id="credits">
      					<p>Coded with enthusiasm by <a href="https://twitter.com/dattacrew19" target="_blank">Sridatta</a></p>
      				</div>

      			</div>
      		</footer>
        );
    }
}
