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

       <div class="text-box">
          <div>
            <div class="announcement mainannounce">Interested in helping organize UCSC's only hackathon for underrepresented groups in tech?</div>
          </div>
          <div class="announcement">Various Team Member positions are now open to all UCSC students!</div>
          <div class="buttons-row">
            <Button disableRipple variant="contained" href="https://docs.google.com/forms/d/1jRLfnywILJy5Fk-GDqjqiqyzpXEAnhSybJZR7Z0CoQg/viewform?edit_requested=true" class="button" target="_blank" rel="noopener noreferrer">
              <div class="button-text">Apply today</div>
            </Button>
          </div>
        </div>

    </div>
  );
}

export default Header;