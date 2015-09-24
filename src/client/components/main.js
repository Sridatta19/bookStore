
import React from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Dashboard from './pages/Dashboard';
import Hero from './pages/Hero';

require('../styles/main.less');
require('../styles/normalize.less');
require('../styles/fonts.css');

export default class Main extends React.Component{

    render() {
        return (
          <div>
            <Header />
            <Hero />
            <Dashboard />
            <Footer />
          </div>
        );
    }
}
