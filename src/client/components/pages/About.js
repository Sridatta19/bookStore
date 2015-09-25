"use strict";

import React,{Component} from 'react';
import DocumentTitle from 'react-document-title';

export default class About extends Component {
  render() {
    return (
      <DocumentTitle title='About Page'>
        <div className="container">
          <h1>About</h1>
          <div id="about-excerpt">
            <p>“Adults...struggle desperately with fiction, demanding constantly that it conform to the rules of everyday life. Adults foolishly demand to know how Superman can possibly fly, or how Batman can possibly run a multibillion-dollar business empire during the day and fight crime at night, when the answer is obvious even to the smallest child: because it is not real.” ― <em>Grant Morrison, Supergods: What Masked Vigilantes, Miraculous Mutants, and a Sun God from Smallville Can Teach Us About Being Human</em></p>
            <br/>
            <p>“Don't talk like one of them. You're not! Even if you'd like to be. To them, you're just a freak, like me! They need you right now, but when they don't, they'll cast you out, like a leper! You see, their morals, their code, it's a bad joke. Dropped at the first sign of trouble. They're only as good as the world allows them to be. I'll show you. When the chips are down, these... these civilized people, they'll eat each other. See, I'm not a monster. I'm just ahead of the curve. -The Joker” ― <em>Christoper Nolan</em></p>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
