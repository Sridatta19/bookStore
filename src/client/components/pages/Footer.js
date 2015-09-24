
import React,{Component} from 'react';

export default class Footer extends React.Component{

    render() {
        return (
          <footer className="main">
      			<div className="container clearfix">

      				<div id="uncopyright">
      					<p>Copyright &copy; 2013 <strong>Brad Hussey</strong></p>
      					<p>Code re-used for learning purposes</p>
      				</div>

      				<div id="credits">
      					<p>Coded with enthusiasm by <a href="twitter.com/dattacrew19" target="_blank">Sridatta</a></p>
      				</div>

      			</div>
      		</footer>
        );
    }
}
