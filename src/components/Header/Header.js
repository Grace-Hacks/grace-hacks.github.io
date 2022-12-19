import React from 'react';
import './Header.scss';
import Calendar from '../../assets/Calendar.svg'
import Location from '../../assets/Location.svg'
// import Lotus from '../../assets/Lotus.svg'
import LotusMobile from '../../assets/Lotus-Mobile.svg'
import Arrow from '../../assets/Header-Arrow.svg'
import Button from '@material-ui/core/Button';
import Lotus from '../../assets/NewLotus.png'
import Water from '../../assets/water.png'

import Bg from '../../assets/up_lotus.png'

function Header() {

  return (
    <div class="header-container">
      <div class="banner" >
        <img src={Lotus}></img>
        <div class="gracehacks">GraceHacks</div>
        <div class="description">create with confidence</div>
      </div>

      {/* <div class="text-box">
          <div class="date-row">
            <img class="image" src={Calendar}></img>
            <div class="event">November 12-13th 10:30 AM - 12:30 PM</div>
          </div>

          <div class="location-row">
            <img class="image" src={Location}></img>
            <div class="event">UCSC Namaste Lounge & Online</div>
          </div>

          <div class="buttons-row">
            <Button disableRipple variant="contained" href="https://gracehacks-22-ucsc.devpost.com" class="button" target="_blank" rel="noopener noreferrer">
              <div class="button-text">Visit our DevPost</div>
            </Button>
          </div>
        </div> */}

    </div>
  );
}

export default Header;