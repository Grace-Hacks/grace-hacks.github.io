import React from 'react';
import './Footer.css';

import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import email from '../../assets/email.png'

function Footer() {
  return (
    <div class="footer-container">
      <div class="footer-contact">CONTACT US</div>
      <div class="footer-social">
        <a href="https://www.instagram.com/gracehacks/" target="_blank" rel="noopener noreferrer"><img class="footer-icon" src={instagram}  alt="instagram"/></a>
        <a href="https://www.facebook.com/gracehacks/" target="_blank" rel="noopener noreferrer"><img class="footer-icon left" src={facebook}  alt="facebook"/></a>
        <a href="https://www.linkedin.com/company/gracehacks/" target="_blank" rel="noopener noreferrer"><img class="footer-icon right" src={linkedin}  alt="linkedin"/></a>
        <a href="mailto:ucsc.gracehacks@gmail.com" target="_blank" rel="noopener noreferrer"><img class="footer-icon" src={email} alt="email"/></a>
      </div>
      <div class="footer-message">
        <div class="made">Made with <span role='img' aria-label='hearts'>❤️❤️❤️</span> by <span role='img' aria-label='snails'>🐌🐌🐌</span> in Santa Cruz.</div>
        <div class="rights">© 2020 GraceHacks. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;