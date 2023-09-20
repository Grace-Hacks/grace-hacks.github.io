import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";

import './NavigationBar.scss';

const useStyles = makeStyles((theme) => ({
  anchor: {
    fontSize: "20px",
    fontWeight: "900",
    marginRight: "20px",
    fontFamily: "Avenir",
    color: "inherit",
    borderRadius: "15px"
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
    fontFamily: 'Avenir',
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
    <div>
      <div className="navigation-container">
        <div className={useStyles().info}>

        <Button className={useStyles().anchor}>
          <Link to="/about">About</Link>
        </Button>

        <Button className={useStyles().anchor}>
          <Link to="/">Calendar</Link>
        </Button>

        <Button className={useStyles().anchor}>
          <Link to="/">Faq</Link>
        </Button>

          <Button className={useStyles().anchor}><AnchorLink href="#faq">FAQ</AnchorLink></Button>
          <Button className={useStyles().anchor}><AnchorLink href="#sponsors">SPONSORS</AnchorLink></Button>
        </div>

        <Button className={useStyles().menuIcon} onClick={handleClick}><MenuIcon/></Button>
        <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}><AnchorLink href="#faq" className={useStyles().menuItem}>FAQ</AnchorLink></MenuItem>
          <MenuItem onClick={handleClose}><AnchorLink href="#sponsors" className={useStyles().menuItem}>SPONSORS</AnchorLink></MenuItem>
        </StyledMenu>
      </div>
    </div>
  );
}

export default NavigationBar;