import React from 'react';
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
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  menuItem: {
    color: "#525357",
    fontWeight: "500",
    textDecoration: "none",
    width: "100%",
    borderRadius: "15px"
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

  return (
    <div>
      <div class="navigation-container">
        <div className={useStyles().info}>
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href="#mission">MISSION</AnchorLink></Button>
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href="#events">EVENTS</AnchorLink></Button>
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href="#faq">FAQ</AnchorLink></Button>
          <Button variant="outline" className={useStyles().anchor}><AnchorLink href="#sponsors">SPONSORS</AnchorLink></Button>
        </div>
        <Button className={useStyles().menuIcon} onClick={handleClick}><MenuIcon/></Button>
        <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}><AnchorLink href="#mission" className={useStyles().menuItem}>MISSION</AnchorLink></MenuItem>
          <MenuItem onClick={handleClose}><AnchorLink href="#events" className={useStyles().menuItem}>EVENTS</AnchorLink></MenuItem>
          <MenuItem onClick={handleClose}><AnchorLink href="#faq" className={useStyles().menuItem}>FAQ</AnchorLink></MenuItem>
          <MenuItem onClick={handleClose}><AnchorLink href="#sponsors" className={useStyles().menuItem}>SPONSORS</AnchorLink></MenuItem>      
        </StyledMenu>
      </div>
    </div>
  );
}

export default NavigationBar;