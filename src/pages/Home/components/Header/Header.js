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
        <img alt="lotus logo" src={Lotus}></img>
        <div className="gracehacks">GraceHacks</div>
        <div className="description">create with confidence</div>
      </div>
    </div>
  );
}

export default Header;