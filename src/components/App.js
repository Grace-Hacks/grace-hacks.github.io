import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Button } from 'react-bootstrap';

import NavigationBar from './NavigationBar/NavigationBar';
import About from './About/About';
import FAQ from './FAQ/FAQ';
import Team from './Team/Team';
import Sponsors from './Sponsors/Sponsors';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Jumbotron style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '75vh', textAlign: "left" }}>
        <h1>GraceHacks @ UCSC</h1>
        <p>UC Santa Cruz's premier all-female and non-binary hackathon.</p>
        <p><Button variant="primary">LEARN MORE!</Button></p>
      </Jumbotron>

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
