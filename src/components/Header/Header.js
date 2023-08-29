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
    </div>
  );
}

export default Header;