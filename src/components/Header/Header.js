import React from 'react';
import './Header.scss';
import GraceHacks from '../../assets/GraceHacks.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Header() {

  const useStyles = makeStyles((theme) => ({
    register: {
      fontSize: "25px",
      fontFamily: "inherit",
      color: "#413f3f !important",
      width: "185px",
      marginLeft: "20px",
    }
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
        <Button variant="contained" href="https://tinyurl.com/GH-app" className={useStyles().register}>REGISTER</Button>
      </div>
    </div>
  );
}

export default Header;