import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div class="navigation-container">
      <a class="nav-title"href="https://grace-hacks.github.io/">GRACEHACKS</a>
      <div class="nav-info">
        <div class="nav-faq">FAQ</div>
        <div class="nav-apply">APPLY</div>
        <div class="nav-icon"></div>
      </div>
    </div>
  );
}

export default NavigationBar;