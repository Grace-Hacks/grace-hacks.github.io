import React from 'react';
import './Header.scss';
import GraceHacks from '../../assets/GraceHacks.png'
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
      color: "#413f3f !important",
      textAlign: "center",
      borderRadius: "25px", 
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
      <div class="left-column">
        <img class="image" src={GraceHacks}></img>
        <div class="title">
          <div class="letter">U</div>
          <div class="letter">C</div>
          <div class="letter">S</div>
          <div class="letter">C</div>
        </div>
      </div>
      <div class="right-column">
        <div class="gracehacks">GraceHacks</div>
        <div class="event"> October 17th-18th 2020</div>
        <Button variant="contained" href="mailto:ucsc.gracehacks@gmail.com" className={useStyles().register}>Bring Your Company to 2021</Button>
      </div>
    </div>
  );
}

export default Header;