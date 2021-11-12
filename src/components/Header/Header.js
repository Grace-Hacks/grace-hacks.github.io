import React from 'react';
import './Header.scss';
import Calendar from '../../assets/Calendar.svg'
import Location from '../../assets/Location.svg'
import Lotus from '../../assets/Lotus.svg'
import LotusMobile from '../../assets/Lotus-Mobile.svg'
import Arrow from '../../assets/Header-Arrow.svg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';


function Header() {

  return (
    <div class="header-container">
      <img class="lotus-mobile" src={LotusMobile}></img>
      <div class="row">
        <div class="left-column">
          <div class="gracehacks">GraceHacks</div>
          <div class="info-row">
            <img class="image" src={Calendar}></img>
            <div class="event">November 13-14th</div>
          </div>
          <div class="info-row">
            <img class="image" src={Location}></img>
            <div class="event">UCSC Stevenson Event Center</div>
          </div>
          <Button disableRipple variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSeOY4N-3mnxMS_yOVn1qMHMocjNsmt9M31CcYRxKeP9x32G3w/viewform" class="button" target="_blank" rel="noopener noreferrer">
            <div class="button-text">Apply</div>
          </Button> 
        </div>
        <div class="right-column">
          <img class="lotus-desktop" src={Lotus}></img>
        </div>
      </div>
      <img class="arrow" src={Arrow}></img>
    </div>
  );
}

export default Header;