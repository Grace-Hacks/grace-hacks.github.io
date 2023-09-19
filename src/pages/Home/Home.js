import React from 'react';
import './Home.scss';

import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import FAQ from './components/FAQ/FAQ';
import Sponsors from '../About/components/Sponsors/Sponsors';
import Gallery from './components/Gallery/Gallery';
import Calendar from './components/Calendar/Calendar'

export default function Home() {
   return (
      <div className="home-container">
        <Header />
        <Bio/>
        <Calendar/>
        <Gallery />
        <FAQ />
        <Sponsors />
      </div>
    );
}