import React from 'react';
import './Header.scss';
import Deer1 from '../../../../assets/Deer1.svg';
import Deer2 from '../../../../assets/Deer2.svg';
import Squiggle from '../../../../assets/Squiggle.svg';
import CollabLogo from '../../../../assets/gracehacks-acm-logo.svg';
/**
 * Unused Assets
  import Calendar from '../../assets/Calendar.svg'
  import Location from '../../assets/Location.svg'
  import LotusMobile from '../../assets/Lotus-Mobile.svg'
  import Arrow from '../../assets/Header-Arrow.svg'
  import Button from '@material-ui/core/Button';
  import Water from '../../assets/water.png'
  import Bg from '../../assets/up_lotus.png'
 */


function Header() {

  return (
    <div className="header-container" id="home">
      <div className="banner">
        <span className="gracehacks">grace<wbr></wbr>hacks</span>
        <div className="description">Santa Cruz's all inclusive hackathon for students of diverse genders.</div>
        <div className="event-info">
          <img className='collab-logo' src={CollabLogo}/>
          <div className='collab-time'>November 10-12th @ Location TBA</div>
          <div className='collab-description'>
            We are excited to partner with ACM to host a large-scale hackathon 
            to offer a variety of opportunities to explore STEM fields and build 
            technical skills through diverse workshops and networking opportunities.
          </div>
        </div>
      </div>
      <div className="curve"></div>
      <img className="squiggle" src={Squiggle}></img>
      <div className='deers'>
        <img className="deer2" src={Deer2}></img>
        <img className="deer1" src={Deer1}></img>
      </div>
    </div>
  );
}

export default Header;