

import NavigationBar from './Home/components/NavigationBar/NavigationBar';
import Header from './Home/components/Header/Header';
import About from './Home/components/Bio/Bio';
import FAQ from './Home/components/FAQ/FAQ';
import Team from './About/components/Team/Team';
import Sponsors from './About/components/Sponsors/Sponsors';
import Footer from './Home/components/Footer/Footer';
import Gallery from './Home/components/Gallery/Gallery';
import Home from './Home/Home';

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
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={Team}/>
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </div>
    </Router>
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





