import React from 'react';
import './Header.scss';
import Calendar from '../../assets/Calendar.svg'
import Location from '../../assets/Location.svg'
import Lotus from '../../assets/Lotus.svg'
import Arrow from '../../assets/Header-Arrow.svg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';


function Header() {

  const customTheme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1110,
        xl: 1920,
      },
    },
  })

  const useStyles = makeStyles(() => ({
    register: {
      fontFamily: "inherit",
      background: "linear-gradient(180deg, #F2ACAC 0%, #EB84B5 79.69%) !important",
      textAlign: "center",
      borderRadius: "20px", 
      [customTheme.breakpoints.down("lg")]: {
        fontSize: "18px",
        width: "330px", 
        marginLeft: "10px",
      },
      [customTheme.breakpoints.up("lg")]: {
        fontSize: "22px",
        width: "390px",
        marginLeft: "21px",
      },
    },
  }));

  return (
    <div class="header-container">
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
          <Button variant="contained" href="mailto:ucsc.gracehacks@gmail.com" class="button">
            <div class="button-text">Apply</div>
          </Button>
        </div>
        <div class="right-column">
          <img class="image" src={Lotus}></img>
        </div>
      </div>
      <img class="image" src={Arrow}></img>
    </div>
  );
}

export default Header;