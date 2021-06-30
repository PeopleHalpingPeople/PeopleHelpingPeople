import React from 'react';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';
import Chat from './chat.js';

const socketIO = socketIOClient('http://localhost:3000');

const SocketWrapper = (props) => {
  return (
    <>
      <Chat socket={socketIO}/>
    </>
  );
};

SocketWrapper.PropTypes = {
  location: PropTypes.object,
};

export default SocketWrapper;

