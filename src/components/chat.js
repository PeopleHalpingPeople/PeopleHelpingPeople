import React, { useEffect } from 'react';
import './styles/style.css';
const SERVER = 'http://localhost:3000';
import socketClient from 'socket.io-client';
import { useAuth0 } from "@auth0/auth0-react";
import { filteredMessages } from '../store/messages.js';
import { connect } from 'react-redux';

function Chat (props) {

  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  let socket = socketClient(SERVER);
    socket.on('connected', () => {
      socket.emit('add user', user);
    });

    socket.on('message list', (data) => {
      props.filteredMessages(data);
    });


  console.log('MESSAGES---', props.messageReducer.chatMessages.allMessages);
  
  let messageList = props.messageReducer.chatMessages.allMessages;

  return (
    <>
      <div id="chat-window">
        <p>Main Chat</p>
        {messageList.map(message => {
          return (
            <li>{message.User_Message}</li>
          )
        })}
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