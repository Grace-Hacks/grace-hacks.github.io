import React from 'react';
import './Header.scss';
import Lotus from '../../../../assets/NewLotus.png'

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
    <div className="header-container">
      <div className="banner" >
        <div className="gracehacks">gracehacks</div>
        <div className="description">Santa Cruz's all inclusive hackathon for students of diverse genders.</div>
        <div className="event-info">
          <div>November 10-12th</div>
          <div>UCSC Stevenson Event Center</div>
        </div>
      </div>
      <div className="curve"></div>
    </div>
  );
}

export default Header;