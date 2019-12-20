import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import NavigationBar from './NavigationBar/NavigationBar';
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
