import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import store from './store';

function Entry() {
  return (
    <>
      <Provider store={store}>
        <Auth0Provider
          domain="simoneodegard.us.auth0.com"
          clientId="Lh9BfFJesXBWUnKOZYjuXsV5OcNOXnB3"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </Provider>
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<Entry />, root);
