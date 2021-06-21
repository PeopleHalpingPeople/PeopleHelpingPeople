import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header.js";
import Main from "./components/main.js";
import Howto from "./components/howto.js";
import About from './components/about.js';
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
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

export default App;
