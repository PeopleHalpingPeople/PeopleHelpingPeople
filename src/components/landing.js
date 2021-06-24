import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./login.js";
import "./styles/style.css";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: "#241909",
    fontSize: 30,
  },
}));
function Landing() {
  const classes = useStyles();
  return (
    <>
      <Login id="action"/>
      <Typography variant="h6" className={classes.title} id="header">
        People Helping People
      </Typography>
    </>
  );
}

export default Landing;
