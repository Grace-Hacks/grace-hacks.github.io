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
    [theme.breakpoints.down("md")]: {
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
    [theme.breakpoints.down("md")]: {
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
        <Button><img className='logo' src={logo}/></Button>
        <div id="desktopButtons" className={useStyles().info}>
          <Button className={useStyles().anchor}>
            <HashLink to="/about" style={{ textDecoration: 'none', textTransform: 'capitalize' }}>About</HashLink>
          </Button>

          <Button className={useStyles().anchor}>
            <HashLink to="/#calendar" style={{ textDecoration: 'none', textTransform: 'capitalize' }}>Schedule</HashLink>
          </Button>

          <Button className={useStyles().anchor}>
            <HashLink to="/#faq" style={{ textDecoration: 'none', textTransform: 'capitalize' }}>FAQ</HashLink>
          </Button>

          <Button className={useStyles().anchor}>
            <HashLink to="/#sponsors" style={{ textDecoration: 'none', textTransform: 'capitalize' }}>Sponsors</HashLink>
          </Button>
        </div>
        <Button id="menuIcon" className={useStyles().menuIcon} onClick={handleClick}><MenuIcon/></Button>
        <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem className={useStyles().menuItem} onClick={handleClose}>
            <HashLink to="/about" style={{ textDecoration: 'none' }}>About</HashLink>
          </MenuItem>
          <MenuItem className={useStyles().menuItem} onClick={handleClose}>
            <HashLink to="/#calendar" style={{ textDecoration: 'none' }}>Schedule</HashLink>
          </MenuItem>
          <MenuItem className={useStyles().menuItem} onClick={handleClose}>
            <HashLink to="/#faq" style={{ textDecoration: 'none' }}>FAQ</HashLink>
          </MenuItem>
          <MenuItem className={useStyles().menuItem} onClick={handleClose}>
            <HashLink to="/#sponsors" style={{ textDecoration: 'none' }}>Sponsors</HashLink>
          </MenuItem>
        </StyledMenu>
      </div>
  );
}

export default NavigationBar;