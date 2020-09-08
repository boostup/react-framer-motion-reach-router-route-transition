import React from "react";
import FramerRouter from "./components/FramerRouter";

import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";

export default () => (
  <>
    <Nav />
    <FramerRouter>
      <Home path="/" />
      <About path="/about" />
    </FramerRouter>
  </>
);
