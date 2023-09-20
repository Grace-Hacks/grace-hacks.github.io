import React from 'react';
import './Footer.scss';
import Fishe from '../../../../assets/cfish.svg';
import email from '../../../../assets/email.svg';
import facebook from '../../../../assets/facebook.svg';
import instagram from '../../../../assets/instagram.svg';
import linkedin from '../../../../assets/linkedin.svg';
import petal from '../../../../assets/GroupPetals.svg';

// import { makeStyles } from '@material-ui/core/styles';

/**
const useStyles = makeStyles({
  icon: {
    color: "white",
    fontSize: "56px",
    margin:"14px",
  },
});
*/


function Footer() {
  return (
      <div className="footer-container" id="contactus">
      <div className="foot-row">
        <div className="notPetal">
        <div className="ping">
          <div className="connect">Connect with us!</div>
          <div className="social">
            <a href="https://www.facebook.com/gracehacks/" target="_blank" rel="noopener noreferrer"><img alt="facebook link" className="socialIcon" src={facebook}></img></a>
            <a href="https://www.linkedin.com/company/gracehacks/" target="_blank" rel="noopener noreferrer"><img alt="linkedin link" className="socialIcon" src={linkedin}></img></a>
            <a href="mailto:ucsc.gracehacks@gmail.com" target="_blank" rel="noopener noreferrer"><img alt="email link" className="socialIcon" src={email}></img></a>
            <a href="https://www.instagram.com/gracehacks/" target="_blank" rel="noopener noreferrer"><img alt="ig link" className="socialIcon" src={instagram}></img></a>
          </div>
        </div>
        </div>
      </div>
      <div className="message">
        <div className="text">Made with <span role='img' aria-label='hearts'>💛💙</span> by <span role='img' aria-label='snails'>🍌🐌</span> in Santa Cruz.</div>
        <div className="text">© 2022 GraceHacks. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;