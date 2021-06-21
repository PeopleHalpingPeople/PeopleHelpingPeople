import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import { Auth0Provider } from "@auth0/auth0-react";

function Entry() {
  return (
    <>
      <Auth0Provider
        domain="simoneodegard.us.auth0.com"
        clientId="Lh9BfFJesXBWUnKOZYjuXsV5OcNOXnB3"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<Entry />, root);
