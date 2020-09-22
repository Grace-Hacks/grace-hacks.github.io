import React from 'react';
import './Header.scss';
import GraceHacks from '../../assets/GraceHacks.png'

function Header() {
  return (
    <div class="header-container">
      <img class="image" src={GraceHacks}></img>
      <div class="title">
        <div class="letter">U</div>
        <div class="letter">C</div>
        <div class="letter">S</div>
        <div class="letter">C</div>
        <div class="gracehacks">GraceHacks</div>
      </div>
      <div class="event"> October 17th & 18th - Online @ 11AM PST</div>
      <a href = "https://tinyurl.com/GH-app" target="_blank" rel="noopener noreferrer" class="button">
        <div class="register"> REGISTER </div>
      </a>
    </div>
  );
}

export default Header;