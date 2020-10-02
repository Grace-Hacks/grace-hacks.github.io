import React from 'react';
import './Header.scss';
import GraceHacks from '../../assets/GraceHacks.png'
import Button from '@material-ui/core/Button';

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
      <div class="event"> October 17th-18th 11AM PST</div>
      <a href = "https://tinyurl.com/GH-app" target="_blank" rel="noopener noreferrer" class="button">
        <Button variant="contained" class="register">REGISTER</Button>
      </a>
    </div>
  );
}

export default Header;