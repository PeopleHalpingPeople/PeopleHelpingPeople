import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Login from "./login.js";
import Logout from "./logout.js";
import './styles/style.css';

import Menu from "./menu.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    background: 'linear-gradient(45deg, #dddbcb 30%, #faf8f1 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#241909',
    fontSize: 30,
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
      <AppBar position="static" id="styling">
        <Toolbar className={classes.bar} id="styling">
        <img src="/assets/peopleLogo.svg" id='logo'></img>
          <Menu />
          <Typography variant="h6" className={classes.title} id='header'>
            People Helping People
          </Typography>
          <Logout />
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  );
}