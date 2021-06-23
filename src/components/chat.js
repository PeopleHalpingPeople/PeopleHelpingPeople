import React, { useEffect, useState } from 'react';
import './styles/style.css';
const SERVER = 'http://localhost:3000';
import socketClient from 'socket.io-client';
import { useAuth0 } from "@auth0/auth0-react";
import { filteredMessages } from '../store/messages.js';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import SocketWrapper from './socket';

function Chat (props) {
  // const [socket, setSocket] = useState({});

  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  console.log(props);

  // useEffect(() => {
  //   setSocket(socketClient(SERVER));
  // }, []);
    let socket = socketClient(SERVER);
  socket.on('connect', () => {
    socket.emit('add user', {username: [props.messageReducer.chatMessages.currentUser]});
  });

  socket.on('message list', (data) => {
    props.filteredMessages(data);
  });

  socket.on('message', (data) => {
    const { User_Message, username } = data;
    socket.emit('chat message', data)
    //TODO: import Regex conditionals
    //TODO: emit private or global
  });

  const newMessage = () => {
    socket.emit('message');
  };




  console.log('MESSAGES---', props.messageReducer.chatMessages);
  
  let messageList = props.messageReducer.chatMessages.allMessages;

  return (
    <>
      <div id="chat-window">
        {user ? 
        <p>Welcome, {user.given_name}</p> : ''
        }
        {user && messageList ? messageList.map(message => {
          console.log(message)
          return (
            <p>{message.username}: {message.User_Message}</p>
          )
        })
        : null}
        {user ?
        <form onSubmit={newMessage}>
          <input type="text"/>
          <input type="submit" value="Send"/>
        </form>
        : null}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  messageReducer: state.messageReducer
});

const mapDispatchToProps = (dispatch, getState) => ({
  filteredMessages: (message) => dispatch(filteredMessages(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);