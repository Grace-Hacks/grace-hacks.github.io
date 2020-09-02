import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import NavigationBar from './NavigationBar/NavigationBar';
import Header from './Header/Header';
import About from './About/About';
import FAQ from './FAQ/FAQ';
import Team from './Team/Team';
import Sponsors from './Sponsors/Sponsors';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';

import './App.css';

function App() {
    return (
      <div className="app-container">
        <NavigationBar />
        <Header />

        {/* <script src="https://embed.typeform.com/embed.js"></script>

        <Jumbotron style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '75vh', textAlign: "left" }}>
          <h1>GraceHacks @ UCSC</h1>
          <p>UC Santa Cruz's premier all-female and non-binary hackathon.</p>

          <p>
            <Button variant="primary">
              REGISTER!
            </Button>
          </p>

          <NewWindow>
            window.open(<ReactTypeformEmbed url="https://shivikasivakumar.typeform.com/to/fmrvAY"/>)
          </NewWindow>

        </Jumbotron> */}

        <About />
        <FAQ />
        <Team />
        <Sponsors />
        {/*<Contacts />  */}
        <Footer />
      </div>
    );
}

export default App;




