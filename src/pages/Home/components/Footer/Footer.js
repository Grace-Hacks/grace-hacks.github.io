import React from 'react';
import './Footer.scss';
import email from '../../../../assets/gmailLogo.svg';
import discord from '../../../../assets/discordLogo.svg';
import facebook from '../../../../assets/facebookLogo.svg';
import instagram from '../../../../assets/instagramLogo.svg';
import linkedin from '../../../../assets/linkedinLogo.svg';
import Deers from '../../../../assets/Deers.svg';
import Tree from '../../../../assets/Tree3.svg';



function Footer() {
  return (
      <div className="footer-container">
        <img className='tree3' src={Tree}/>
        <img className='deers' src={Deers}/>
        <div className="social" id="contactus">
          <a href="https://discord.gg/QbNNNYxtDA" target="_blank" rel="noopener noreferrer"><img alt="discord link" className="socialIcon" src={discord}></img></a>
          <a href="https://www.facebook.com/gracehacks/" target="_blank" rel="noopener noreferrer"><img alt="facebook link" className="socialIcon" src={facebook}></img></a>
          <a href="https://www.linkedin.com/company/gracehacks/" target="_blank" rel="noopener noreferrer"><img alt="linkedin link" className="socialIcon" src={linkedin}></img></a>
          <a href="mailto:ucsc.gracehacks@gmail.com" target="_blank" rel="noopener noreferrer"><img alt="email link" className="socialIcon" src={email}></img></a>
          <a href="https://www.instagram.com/gracehacks/" target="_blank" rel="noopener noreferrer"><img alt="ig link" className="socialIcon" src={instagram}></img></a>
        </div>
        <div className="message">
          <div className="text">Made with <span role='img' aria-label='hearts'>💛💙</span> by <span role='img' aria-label='snails'>🍌🐌</span> in Santa Cruz.</div>
          <div className="text">© 2022 GraceHacks. All rights reserved.</div>
        </div>
      </div>
  );
}

export default Footer;