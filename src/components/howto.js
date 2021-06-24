import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    marginTop: 20,
    maxWidth: 800,
    maxHeight: 400,
    background: "#faf8f1",
    borderWidth: 3,
    borderColor: "#645853",
    borderStyle: "solid",
  },
  welcome: {
    textAlign: "center",
    marginTop: 20,
  },
  chatbox: {
    overflow: "auto",
    padding: 10,
  },
  input: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  inputBox: {
    width: 680,
    background: "#faf8f1",
    borderWidth: 1,
    borderColor: "#645853",
    borderStyle: "solid",
  },
  button: {
    width: 100,
    paddingTop: 15,
    paddingBottom: 15,
    background: "#44392e",
    color: "#faf8f1",
  },
}));
function HowTo() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} id="howto-card">
        <CardContent>
          <Typography>
              <h2>How to use this app</h2>
              <p>Step 1: Log in to the application with Auth0</p>
              <p>Step 2: There are two ways to sign in with our application:</p>
              <img src="/Assets/loginscreen.jpg" id="login"/>
              <ul>
                <li>
                  The first is to create an account by clicking the "sign up"
                  button.
                </li>
                <li>
                  The second option is to sign in with a Google
                  account.
                </li>
              </ul>
              <p>Step 3: Navigate to the chat window and type in a message</p>
              <p>Step 4: To send a private message, within the input felid you type "/ to" and the name of the user you want to chat with </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} id="about-card">
        <CardContent>
          <Typography>
              <h2>About our Application</h2>
              <p></p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default HowTo;