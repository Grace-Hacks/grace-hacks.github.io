import React from 'react';
import './About.scss';

import Bio from './components/Bio/Bio';
import Gallery from './components/Gallery/Gallery';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

export default function About() {
   return (
      <div className="about-container">
        <Bio/>
        <Gallery/>
        <Team/>
        <Footer className='footer'></Footer>
      </div>
    );
}