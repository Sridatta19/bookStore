
import React from 'react';

export default class Newsboard extends React.Component{

    render() {
        return (
          <div id="news-events" className="clearfix">

    				<div id="articles">
    					<h2>News, Events &amp; Such</h2>

    					<article className="news">
    						<header>
    							<h3>Smugglers Run by Greg Rucka</h3>
    							<time datetime="2013-09-4">September 4, 2013</time>
    						</header>

    						<section className="excerpt">
    							<p>Han Solo and Chewbacca the Wookiee team-up for an all-new adventure in this thrilling upper middle grade novel. Set between Star Wars: A New Hope and Star Wars: The Empire Strikes Back, the story follows your favorite pair of smugglers as they fly the Millennium Falcon on a top-secret mission for the Rebellion. <a href="">Read more &rarr;</a></p>
    						</section>

    						<footer>
    							Posted under <a href="">News</a>
    						</footer>
    					</article>

    					<article className="event">
    						<header>
    							<h3>Shattered Empire</h3>
    							<time datetime="2013-11-17">November 17, 2013</time>
    						</header>

    						<section className="excerpt">
    							<p>For the first time in the new Star Wars canon, journey with us into the time after the end of Return of the Jedi! Writer Greg Rucka (PUNISHER, WOLVERINE, Gotham Central) and artist Marco Checchetto (AVENGERS WORLD, PUNISHER) take us past the destruction of the second Death Star into the chaos of a Shattered Empire. <a href="">Read more &rarr;</a></p>
    						</section>

    						<footer>
    							Posted under <a href="">News</a>
    						</footer>
    					</article>
    				</div>
            <div id="feature-image">
    					<img src="images/starwars.png" alt="Spider Bro'" />
    				</div>

    			</div>
        );
    }
}
