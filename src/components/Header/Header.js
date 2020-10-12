import React from 'react';
import './Header.scss';
import GraceHacks from '../../assets/GraceHacks.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme } from '@material-ui/core/styles';


function Header() {

  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 900,
        xl: 1920,
      },
    },
  })

  console.log(theme);

  const useStyles = makeStyles((theme) => ({
    registerDesktop: {
      fontSize: "25px",
      fontFamily: "inherit",
      color: "#413f3f !important",
      width: "185px",
      marginLeft: "21px",
      [theme.breakpoints.down("lg")]: {
          display: "none",
      },
      [theme.breakpoints.up("lg")]: {
        display: "flex",
      },
    },
    registerMobile: {
      fontSize: "25px",
      fontFamily: "inherit",
      color: "#413f3f !important",
      width: "340px",
      marginLeft: "18px",
      [theme.breakpoints.down("lg")]: {
        display: "flex",
      },
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
    },
  }));

   const matches = useMediaQuery('(max-width:1100px)');

  return (
    <div class="header-container">
      <div class="left-column">
      {/* <span>{`(min-width:1100px) matches: ${matches}`}</span> */}
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
        <Button variant="contained" href="https://tinyurl.com/GH-app" className={useStyles(theme).registerDesktop}>REGISTER</Button>
        <Button variant="contained" href="https://tinyurl.com/GH-app" className={useStyles(theme).registerMobile}>REGISTER</Button>
      </div>
    </div>
  );
}

export default Header;