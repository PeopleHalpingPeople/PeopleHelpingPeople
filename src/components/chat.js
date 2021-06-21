import React from 'react';
import './styles/style.css';
const SERVER = 'http://localhost:3000';
import socketClient from 'socket.io-client';
import { useAuth0 } from "@auth0/auth0-react";

function Chat () {
  let chatMessages = [];

  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  let socket = socketClient(SERVER);
    socket.on('TEST', () => {
      console.log('I am connected TEST-------');
      socket.emit('add user', user);
    });

    socket.on('message list', (data) => {
      console.log('MESSAGES----', data);
      data.allMessages.forEach((chatMessage) => {
        chatMessages.push(chatMessage);
        console.log('CHAT MESS---', chatMessage.username, chatMessage.User_Message);
      });
    });


  console.log('MESSAGES---', chatMessages);


    

  return (
    <>
      <div id="chat-window">
        <p>Main Chat</p>
        {/* <ul>
          {chatMessages}
        </ul> */}
        {chatMessages.map(message => {
          return (
            <li>{message.User_Message}</li>
          )
        })}
      </div>
    </>
  )
}

export default Chat;