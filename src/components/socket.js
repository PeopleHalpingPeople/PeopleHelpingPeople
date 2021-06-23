import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';
import Chat from './chat.js';

const SocketWrapper = (props) => {
  // const { user } = props.location.state;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(socketIOClient('http://localhost:3000'));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      {socket ? <Chat socket={socket}/> : <span>Loading...</span>}
    </>
  );
};

SocketWrapper.PropTypes = {
  location: PropTypes.object,
};

export default SocketWrapper;

