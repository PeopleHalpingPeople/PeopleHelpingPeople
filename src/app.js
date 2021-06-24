import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header.js";
// import Chat from "./components/chat.js";
import Howto from "./components/howto.js";
import About from './components/about.js';
import Footer from "./components/footer";
import Landing from './components/landing.js';
import SocketWrapper from "./components/socket.js";
import { withAuth0 } from '@auth0/auth0-react';

function App (props) {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            { !props.auth0.isAuthenticated ?
            <Landing /> :  <SocketWrapper />
            }
          </Route>
          <Route exact path="/">
            <Landing />
            <SocketWrapper />
          </Route>
          {/* <Route exact path="/main">
            
          </Route> */}
          <Route exact path="/howto">
            <Howto />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default withAuth0(App);
