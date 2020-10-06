import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import './NavigationBar.scss';
import GraceHacks from '../../assets/GraceHacks.png'

const useStyles = makeStyles((theme) => ({
  anchor: {
    fontSize: "28px",
    marginRight: "20px",
    fontFamily: "inherit",
    color: "inherit",
    padding: "0px"
  },
  info: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menu: {
    display: "none",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  menuItem: {
    color: "inherit",
    textDecoration: "none",
    width: "100%"
  },
  register: {
    fontSize: "21px",
    fontFamily: "inherit",
    color: "#413f3f !important"
  }
}));

function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar class="navigation-container">
        <div class="logo">
          <img class="image" src={GraceHacks}></img>
          <a class="title" href="https://grace-hacks.github.io/">GraceHacks</a>
        </div>
        <div className={useStyles().info}>
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href="#mission">MISSION</AnchorLink></Button>
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href="#faq">FAQ</AnchorLink></Button>
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href="#sponsors">SPONSOR</AnchorLink></Button>
          <Button variant="contained" href="https://tinyurl.com/GH-app" className={useStyles().register}>REGISTER</Button>
        </div>
        <MenuIcon className={useStyles().menu} onClick={handleClick}/>
        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}><AnchorLink href="#mission" className={useStyles().menuItem}>MISSION</AnchorLink></MenuItem>
          <MenuItem onClick={handleClose}><AnchorLink href="#faq" className={useStyles().menuItem}>FAQ</AnchorLink></MenuItem>
          <MenuItem onClick={handleClose}><AnchorLink href="#sponsors" className={useStyles().menuItem}>SPONSOR</AnchorLink></MenuItem>
          <MenuItem onClick={handleClose}><a href="https://tinyurl.com/GH-app" className={useStyles().menuItem}>REGISTER</a></MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;