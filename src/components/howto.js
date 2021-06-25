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
    borderWidth: 1,
    borderColor: "#645853",
    borderStyle: "solid",
  },
  chatbox: {
    overflow: "auto",
    padding: 10,
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
              <p id="steps">Step 1: Log in to the application with Auth0</p>
              <p id="steps">
                Step 2: There are two ways to sign in with our application:
              </p>
              <center><img src="/Assets/loginscreen.jpg" id="login" /></center>
              <ul>
                <li>
                  The first is to create an account by clicking the "sign up"
                  button.
                </li>
                <li>The second option is to sign in with a Google account.</li>
              </ul>
              <p id="steps">
                Step 3: Navigate to the chat window and type in a message
              </p>
              <p id="steps">
                Step 4: To send a private message, within the input felid you
                type "/ to" and the name of the user you want to chat with{" "}
              </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} id="about-card">
        <CardContent>
          <Typography>
            <h2>About our Application</h2>
            <p>
              Our webpage is a chat application that started off life with
              components in the back end. The chat functionality was rendered
              originally with a terminal and user interactions took place within
              the terminal window. As the functionality grew within the page we
              came to a pivot point to integrate the back-end to the front-end.
              Slowly but surely we brought the functionality of both together
              and with many tribulations, we successfully married the two
              together.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default HowTo;
