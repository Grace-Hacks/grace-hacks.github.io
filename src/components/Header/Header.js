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
        lg: 1100,
        xl: 1920,
      },
    },
  })

  console.log(customTheme);

  const useStyles = makeStyles(() => ({
    registerDesktop: {
      fontSize: "25px",
      fontFamily: "inherit",
      color: "#413f3f !important",
      width: "185px",
      marginLeft: "21px",
      [customTheme.breakpoints.down("lg")]: {
          display: "none",
      },
      [customTheme.breakpoints.up("lg")]: {
        display: "flex",
      },
    },
    registerMobile: {
      fontSize: "25px",
      fontFamily: "inherit",
      color: "#413f3f !important",
      width: "330px",
      marginLeft: "10px",
      [customTheme.breakpoints.down("lg")]: {
        display: "flex",
      },
      [customTheme.breakpoints.up("lg")]: {
        display: "none",
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
        <div class="event"> October 17th-18th 11AM PST</div>
        <Button variant="contained" href="https://tinyurl.com/GH-app" className={useStyles().registerDesktop}>REGISTER</Button>
        <Button variant="contained" href="https://tinyurl.com/GH-app" className={useStyles().registerMobile}>REGISTER</Button>
      </div>
    </div>
  );
}

export default Header;