import React from 'react';
import './Footer.scss';

import { makeStyles } from '@material-ui/core/styles';
import { Facebook, LinkedIn, Email, Instagram } from '@material-ui/icons';

const useStyles = makeStyles({
  icon: {
    color: "white",
    fontSize: "56px",
    margin:"14px",
  },
});


function Footer() {
  return (
    <div class="footer-container">
      <div class="contact">CONNECT WITH US</div>
      <div class="social">
        <a href="https://www.facebook.com/gracehacks/" target="_blank" rel="noopener noreferrer"><Facebook className={useStyles().icon} /></a>
        <a href="https://www.linkedin.com/company/gracehacks/" target="_blank" rel="noopener noreferrer"><LinkedIn className={useStyles().icon} /></a>
        <a href="mailto:ucsc.gracehacks@gmail.com" target="_blank" rel="noopener noreferrer"><Email className={useStyles().icon} /></a>
        <a href="https://www.instagram.com/gracehacks/" target="_blank" rel="noopener noreferrer"><Instagram className={useStyles().icon} /></a>
      </div>
      <div class="message">
        <div class="text">Made with <span role='img' aria-label='hearts'>💛💙</span> by <span role='img' aria-label='snails'>🍌🐌</span> in Santa Cruz.</div>
        <div class="text">© 2020 GraceHacks. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;