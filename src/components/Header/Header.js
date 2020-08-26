import React from 'react';
import './Header.css';
import GraceHacks from '../../assets/GraceHacks.png'

function Header() {
  return (
    <div class="header-container">
      <img class="header-image" src={GraceHacks}></img>
      <div className="title">
        <div id="letter">U</div>
        <div id="letter">C</div>
        <div id="letter">S</div>
        <div id="letter">C</div>
        <div id="word">GraceHacks</div>
      </div>
      <div id="event"> October 17th & 18th - Online @ 11AM PST</div>
      <a href = "https://tinyurl.com/GH-app" target="_blank" rel="noopener noreferrer" class="button">
        <div id="register"> REGISTER </div>
      </a>
    </div>
  );
}

export default Header;