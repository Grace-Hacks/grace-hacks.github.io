import React from 'react';
import './Home.scss';

import Header from './components/Header/Header';
import FAQ from './components/FAQ/FAQ';
import Sponsors from './components/Sponsors/Sponsors';
import Calendar from './components/Calendar/Calendar'
import Footer from './components/Footer/Footer';
import Tree from '../../assets/Tree.svg';
import Signup from './components/Signup/Signup';

export default function Home() {
   return (
      <div className="home-container" id='home'>
        <Header />
        <img className='tree' src={Tree}/>
        <Signup/>
        <FAQ />
        <Calendar/>
        <Sponsors />
        <Footer/>
      </div>
    );
}