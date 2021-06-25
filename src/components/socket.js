import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';
import Chat from './chat.js';

const socketIO = socketIOClient('https://people-server401.herokuapp.com/');
// const socketIO = socketIOClient('http://localhost:3000');

const SocketWrapper = (props) => {
  // const { user } = props.location.state;
  // const [socket, setSocket] = useState(null);

  // useEffect(() => {

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <>
      {/* {socket ? <Chat socket={socket}/> : <span>Loading...</span>} */}
      <Chat socket={socketIO}/>
    </>
  );
};

SocketWrapper.PropTypes = {
  location: PropTypes.object,
};

export default SocketWrapper;

