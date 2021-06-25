import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom';
import Logout from "./logout.js";
import './styles/style.css';

import Menu from "./menu.js";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
  },
}));
export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" id="styling" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar className={classes.bar} id="styling">
        <img src="/assets/peopleLogo.png" alt="logoImage" id='logo'></img>
          <Button id="menuButton">
            <NavLink className={classes.menuButton}to ={{ pathname: "/" }}>Main</NavLink >
          </Button>
          <Button id="menuButton">
            <NavLink className={classes.menuButton} to={{ pathname: "/howto" }}>How to</NavLink >
          </Button>
          <Button id="menuButton">
            <NavLink className={classes.menuButton} to={{ pathname: "/about" }}>About Us</NavLink >
          </Button>
          
          <Logout id="action"/>
          {/* <Login id="action"/> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}