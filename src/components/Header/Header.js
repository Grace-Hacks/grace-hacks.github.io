import React from 'react';
import './Header.css';
import GraceHacks from '../../assets/GraceHacks.png'

function Header() {
  return (
    <div class="header-container">
      <img class="header-image" src={GraceHacks}></img>
      <div class="title">
        <div class="letterHeader">U</div>
        <div class="letterHeader">C</div>
        <div class="letterHeader">S</div>
        <div class="letterHeader">C</div>
        <div class="spacer"></div>
        <div class="word">GraceHacks</div>
      </div>
      <div class="event"> October 17th & 18th - Online @ 11AM PST</div>
      <a href = "https://tinyurl.com/GH-app" target="_blank" rel="noopener noreferrer" class="button">
        <div class="register"> REGISTER </div>
      </a>
    </div>
  );
}

export default Header;