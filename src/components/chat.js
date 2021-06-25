import React, { useEffect, useState } from "react";
import "./styles/style.css";
const HOST = "http://localhost:3000";
const { Socket } = require("socket.io-client");
import io from "socket.io-client";
import { useAuth0 } from "@auth0/auth0-react";
import { filteredMessages, newMessage } from "../store/messages.js";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import SocketWrapper from "./socket";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./styles/style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    marginTop: 20,
    maxWidth: 800,
    maxHeight: 500,
    background: "transparent",
  },
  welcome: {
    textAlign: "center",
    marginTop: 20,
  },
  chatbox: {
    padding: 10,
  },
  input: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  inputBox: {
    width: 610,
    background: "#faf8f1",
    borderRadius: '4px',
  },
  button: {
    width: 100,
    paddingTop: 15,
    paddingBottom: 15,
    background: "#44392e",
    color: "#faf8f1",
  },
  private: {
    display: 'flex',
    justifyContent: 'right',
    width: '500px',
    margin: '20px',
    marginLeft: '250px',
    backgroundColor:"#777974",
    color: '#FFF',
    borderRadius: '50px',
  },
  global: {
    width: '500px',
    margin: '20px',
    backgroundColor:"#faf8f1",
    color: "#645853",
    borderRadius: '50px',
  },
}));

function Chat(props) {
  const classes = useStyles();

  // const [socket, setSocket] = useState({});
  const [messageText, setMessageText] = useState("");
  let messageList = props.messageReducer.chatMessages.allMessages;
  console.log("MESS LIST", messageList);

  const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log(user);
  const { socket } = props;
  // useEffect(() => {
  //   setSocket(io(HOST));
  // }, []);
  // let socket = io.connect(HOST);
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (user) {
      //TODO - logic to only print once. messageList is array
      // console.log('messageList', {messageList});
      // let list = [];
      // list = Object.values(messageList);
      // console.log('LIST', list);
      socket.emit("add user", user.given_name);
    }
  }, [user]);

  socket.on("connect", () => {
    console.log("user is connected");
  });

  socket.on("message list", (data) => {
    props.filteredMessages(data);
  });

  useEffect(() => {
    socket.on("message", (data) => {
      const { User_Message, username } = data;
      // socket.emit('chat message', data)
      console.log("DATA---", data);
      props.newMessage(data);
      //TODO: import Regex conditionals
      //TODO: emit private or global
    });
  }, []);

  useEffect(() => {
    socket.on("private message", (data) => {
      const { User_Message, username } = data;
      // socket.emit('chat message', data)
      console.log("DATA---", data);
      props.newMessage(data);
      //TODO: import Regex conditionals
      //TODO: emit private or global
    });
  }, []);

  const newMessage = (event) => {
    // if prevent default removed, page refreshes and never get dups. needs JUST COMPONENT to re-render without dups
    event.preventDefault();
    console.log("WORKING?", event);

    console.log("messageTEXT", messageText);

    let regex1 = /(\S+\w+\s+){2}/gm;
    let regex1string = messageText.match(regex1);

    let messageConstructor = messageText.split(" ");
    console.log("messageConst", messageConstructor);
    let messageType = messageConstructor[0];
    console.log("messageType", messageType);

    let privateReceiver = null;
    if (messageType === "/to") {
      privateReceiver = regex1string[0].split(" ")[1];
    }
    console.log("privateReceiver", privateReceiver);

    if (messageType === "/to") {
      socket.emit("private message", {
        User_Message: messageText,
        username: user.given_name,
        privateReceiver,
        messageType,
      });
    } else {
      socket.emit("message1", {
        User_Message: messageText,
        username: user.given_name,
      });
    }

    // socket.emit('message1', {User_Message: messageText, username: user.given_name});
    event.target.reset();
    // console.log('TEXT', messageText);
    // props.newMessage(messageText);
    setMessageText("");
  };

  return (
    <>
      <h1 className={classes.welcome} id="welcome">
        {user ? <p>Welcome, {user.given_name}</p> : ""}
      </h1>
      <Card
        className={classes.root}
        style={{ maxHeight: 500, background: 'transparent', boxShadow: 'none'}}
      >
        <CardContent>
          <Typography
            className={classes.chatbox}
            id="chatbox"
            variant="body2"
            color="textSecondary"
            component="span"
          >
            {user && messageList
              ? messageList.map((message, index) => {
                  return (
                    <>
                      {(message.privateReceiver &&
                        message.privateReceiver === user.given_name) ||
                      (message.privateReceiver &&
                        message.username === user.given_name) ? (
                        <Card className={classes.private}>
                          <CardContent>
                            <Typography
                              variant="body2"
                              // color="textSecondary"
                              component="p"
                            >
                              {/* <img src={ Panda }/> */}
                              {message.username}: {message.User_Message}
                            </Typography>
                          </CardContent>
                        </Card>
                      ) : null}
                      {!message.privateReceiver ? (
                        <Card className={classes.global}>
                          <CardContent>
                            <Typography
                              variant="body2"
                              // color="textSecondary"
                              component="p"
                            >
                              {message.username}: {message.User_Message}
                            </Typography>
                          </CardContent>
                        </Card>
                      ) : null}
                    </>
                    // <>
                    // {(message.privateReceiver && message.privateReceiver === user.given_name) || (message.privateReceiver && message.username === user.given_name) ? <p>{message.username}: {message.User_Message}</p> : null}
                    // {!message.privateReceiver ? <p>{message.username}: {message.User_Message}</p> : null}
                    // </>
                  );
                })
              : null}
          </Typography>
        </CardContent>
      </Card>
      {user ? (
        <form className={classes.input} onSubmit={newMessage}>
          <TextField
            onChange={(e) => setMessageText(e.target.value)}
            className={classes.inputBox}
            id="outlined-basic"
            label="type message"
            variant="outlined"
            type="text"
          />
          <Button
            className={classes.button}
            id="sendbutton"
            variant="contained"
            type="submit"
          >
            Send
          </Button>
        </form>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => ({
  messageReducer: state.messageReducer,
});

const mapDispatchToProps = (dispatch, getState) => ({
  filteredMessages: (message) => dispatch(filteredMessages(message)),
  newMessage: (message) => dispatch(newMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
