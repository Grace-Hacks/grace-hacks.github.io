import React from 'react';
import './About.scss';

import Bio from './components/Bio/Bio';
import Gallery from './components/Gallery/Gallery';
import Team from './components/Team/Team';

export default function About() {
   return (
      <div className="about-container">
        <Bio/>
        <Gallery/>
        <Team/>
      </div>
    );
}