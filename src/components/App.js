import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import NavigationBar from './NavigationBar/NavigationBar';
import About from './About/About';
import FAQ from './FAQ/FAQ';
import Team from './Team/Team';
import Sponsors from './Sponsors/Sponsors';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';

import logo from '../assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Everything works!
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <About />
      <FAQ />
      <Team />
      <Sponsors />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
