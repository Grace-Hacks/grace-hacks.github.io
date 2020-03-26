import React from 'react';
import './NavigationBar.css';
import instagram from '../../assets/instagram.png'

function NavigationBar() {
  return (
    <div class="navigation-container">
      <a class="nav-title"href="https://grace-hacks.github.io/">GRACEHACKS</a>
      <div class="nav-info">
        <a href="https://tinyurl.com/GH-app" target="_blank" rel="noopener noreferrer" class="nav-apply">APPLY</a>
        <a href="https://www.instagram.com/gracehacks/" target="_blank" rel="noopener noreferrer"><img class="nav-icon" src={instagram}  alt="instagram"/></a>
      </div>
    </div>
  );
}

export default NavigationBar;