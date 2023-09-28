import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";
import logo from '../../../../assets/GraceHacks.png'

import './NavigationBar.scss';

const useStyles = makeStyles((theme) => ({
  anchor: {
    fontSize: "20px",
    fontWeight: "900",
    marginRight: "30px",
    textDecoration: "none",
    fontFamily: "Nunito",
    color: "inherit",
    borderRadius: "15px",
  },
  info: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuIcon: {
    display: "none",
    color: "#F2A7AD",
    transform: "scale(1.7)",
    padding: "0px 0px",
    maxWidth: "30px",
    minWidth: "30px",
    marginRight:"30px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  menuItem: {
    color: "#525357",
    fontWeight: "500",
    textDecoration: "none",
    width: "100%",
    borderRadius: "15px",
    fontFamily: 'Nunito',
  }
}));

const StyledMenu = withStyles({
  paper: {
    borderRadius: "15px",
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    PaperProps={{
      style: {
        borderRadius: "15px",
      }
    }}
    {...props}
  />
));

function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };


  /**
   * Task: figure out how to redirect to a certain page from a different page (example: going from the About page
   * to the calendar on the home page)
   */
  return (
      <div className="navigation-container">

        <HashLink id="gracehacks-button" to="/#home">
          <Button><img className='logo' src={logo}/></Button>
        </HashLink>

        <div id="desktopButtons" className={useStyles().info}>
          <Button className={useStyles().anchor}>
            <Link to="/about" style={{ textDecoration: 'none', textTransform: 'capitalize', color: '#FFFFFF' }}>About</Link>
          </Button>

          <Button className={useStyles().anchor}>
            <HashLink to="/#schedule" style={{ textDecoration: 'none', textTransform: 'capitalize', color: '#FFFFFF' }}>Schedule</HashLink>
          </Button>

          <Button className={useStyles().anchor}>
            <HashLink to="/#faq" style={{ textDecoration: 'none', textTransform: 'capitalize', color: '#FFFFFF' }}>FAQ</HashLink>
          </Button>

          <Button className={useStyles().anchor}>
            <HashLink to="/#sponsors" style={{ textDecoration: 'none', textTransform: 'capitalize', color: '#FFFFFF' }}>Sponsors</HashLink>
          </Button>

        </div>

        <Button id="contact-us-button" className={useStyles().info}>
            <HashLink to="/#contactus" style={{ textDecoration: 'none', textTransform: 'capitalize', color: '#FFFFFF' }}>Contact Us</HashLink>
        </Button>

        <Button id="menuIcon" className={useStyles().menuIcon} onClick={handleClick}><MenuIcon/></Button>
        <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem className={useStyles().menuItem} onClick={handleClose}>
            <Link to="/about" style={{ textDecoration: 'none', color: '#000000' }}>About</Link>
          </MenuItem>
          <MenuItem className={useStyles().menuItem} onClick={handleClose}>
            <HashLink to="/#schedule" style={{ textDecoration: 'none', color: '#000000' }}>Schedule</HashLink>
          </MenuItem>
          <MenuItem className={useStyles().menuItem} onClick={handleClose}>
            <HashLink to="/#faq" style={{ textDecoration: 'none', color: '#000000' }}>FAQ</HashLink>
          </MenuItem>
          <MenuItem className={useStyles().menuItem} onClick={handleClose}>
            <HashLink to="/#sponsors" style={{ textDecoration: 'none', color: '#000000' }}>Sponsors</HashLink>
          </MenuItem>
          <MenuItem className={useStyles().menuItem} onClick={handleClose}>
            <HashLink to="/#contactus" style={{ textDecoration: 'none', color: '#000000' }}>Contact Us</HashLink>
          </MenuItem>
        </StyledMenu>
      </div>
  );
}

export default NavigationBar;