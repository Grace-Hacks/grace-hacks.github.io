import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import './NavigationBar.scss';
import GraceHacks from '../../assets/GraceHacks.png'

const useStyles = makeStyles({
  anchor: {
    fontSize: "28px",
    marginRight: "20px",
    fontFamily: "inherit",
    color: "inherit",
    padding: "0px"
  },
  register: {
    fontSize: "21px",
    fontFamily: "inherit",
    color: "#413f3f"
  }
});

function NavigationBar() {
  return (
    <AppBar position="fixed">
      <Toolbar class="navigation-container">
        <div class="logo">
          <img class="image" src={GraceHacks}></img>
          <a class="title" href="https://grace-hacks.github.io/">GraceHacks</a>
        </div>
        <div class="info">
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href="#mission">MISSION</AnchorLink></Button>
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href="#faq">FAQ</AnchorLink></Button>
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href='#sponsors'>SPONSOR</AnchorLink></Button>
          <Button variant="contained" href="https://tinyurl.com/GH-app">REGISTER</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;