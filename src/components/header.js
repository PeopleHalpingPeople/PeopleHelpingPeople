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
  // root: {
  //   flexGrow: 1,
  // },
  // title: {
  //   flexGrow: 1,
  //   color: '#241909',
  //   fontSize: 30,
  // },
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
        <img src="/assets/peopleLogo.svg" id='logo'></img>
          <Button variant="contained" id="menuButton">
            <NavLink to={{ pathname: "/" }}>Main</NavLink >
          </Button>
          <Button variant="contained" id="menuButton">
            <NavLink to={{ pathname: "/howto" }}>How to</NavLink >
          </Button>
          <Button variant="contained" id="menuButton">
            <NavLink to={{ pathname: "/about" }}>About Us</NavLink >
          </Button>
          
          <Logout id="action"/>
          {/* <Login id="action"/> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}