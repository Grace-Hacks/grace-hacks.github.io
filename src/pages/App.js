

import NavigationBar from './Home/components/NavigationBar/NavigationBar';
import Header from './Home/components/Header/Header';
import FAQ from './Home/components/FAQ/FAQ';
import Team from './About/components/Team/Team';
import Sponsors from './Home/components/Sponsors/Sponsors';
import Footer from './Home/components/Footer/Footer';
import Gallery from './About/components/Gallery/Gallery';
import Home from './Home/Home';
import About from './About/About';


/**
 * Unused Components
import Events from './Events/Events';
import Calendar from './Calendar/Calendar';
import Contacts from './Contacts/Contacts';
*/

import './App.scss';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <div>
    <Router>
      <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
    </Router>

    </div>
  );
}

// You can think of these components as "pages"
// in your app.


/**
function App() {
    return (
      <div className="app-container">
        <NavigationBar />
        <Header />
        <About />
        <Gallery />
        <FAQ />
        <Sponsors />
        <Footer />
        <Team />
      </div>
    );
}
*/





