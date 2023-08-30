import React from 'react';

import NavigationBar from './NavigationBar/NavigationBar';
import Header from './Header/Header';
import About from './About/About';
import FAQ from './FAQ/FAQ';
import Team from './Team/Team';
import Sponsors from './Sponsors/Sponsors';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';

/**
 * Unused Components
import Events from './Events/Events';
import Calendar from './Calendar/Calendar';
import Contacts from './Contacts/Contacts';
*/

import './App.scss';

function App() {
    return (
      <div className="app-container">
        <NavigationBar />
        <Header />
        <About />
        {/* <Calendar /> */}
        {/* <Events /> */}
        <Gallery />
        <FAQ />
        <Sponsors />
        <Footer />
        <Team />
      </div>
    );
}

export default App;




