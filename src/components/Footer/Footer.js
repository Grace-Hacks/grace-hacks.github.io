import React from 'react';
import './Footer.scss';
import Fishe from '../../assets/Fishe.svg'
import email from '../../assets/email.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import petal from '../../assets/petal.svg'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    color: "white",
    fontSize: "56px",
    margin:"14px",
  },
});


function Footer() {
  return (
      <div class="footer-container" id="contactus">
      <div class="foot-row">
        <div className="notPetal">
        <img class="fish" src={Fishe}></img>
        <div className="ping">
          <div class="connect">Connect with us!</div>
          <div class="social">
            <a href="https://www.facebook.com/gracehacks/" target="_blank" rel="noopener noreferrer"><img class="socialIcon" src={facebook}></img></a>
            <a href="https://www.linkedin.com/company/gracehacks/" target="_blank" rel="noopener noreferrer"><img class="socialIcon" src={linkedin}></img></a>
            <a href="mailto:ucsc.gracehacks@gmail.com" target="_blank" rel="noopener noreferrer"><img class="socialIcon" src={email}></img></a>
            <a href="https://www.instagram.com/gracehacks/" target="_blank" rel="noopener noreferrer"><img class="socialIcon" src={instagram}></img></a>
          </div>
        </div>
        </div>
        <img class="petal" src={petal}></img>
      </div>
      <div class="message">
        <div class="text">Made with <span role='img' aria-label='hearts'>💛💙</span> by <span role='img' aria-label='snails'>🍌🐌</span> in Santa Cruz.</div>
        <div class="text">© 2022 GraceHacks. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;