import React from 'react';
import './Home.scss';

import Header from './components/Header/Header';
import FAQ from './components/FAQ/FAQ';
import Sponsors from './components/Sponsors/Sponsors';
import Calendar from './components/Calendar/Calendar'
import Footer from './components/Footer/Footer';

export default function Home() {
   return (
      <div className="home-container" id='home'>
        <Header />
        <div className="sign-up">
          <div className='sign-up-title'>sign up</div>
          <div>
            <button>MENTOR</button>
            <button>PARTICIPANT</button>
          </div>
        </div>
        <FAQ />
        <Calendar/>
        <Sponsors />
        <Footer/>
      </div>
    );
}