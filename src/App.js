import React from "react";
import FramerRouter from "./components/FramerRouter";

import Nav from "./components/Nav";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Threeeee from "./pages/threeeee";
import About from "./pages/about";

export default () => (
  <>
    <Nav />
    <FramerRouter>
      <Home path="/" />
      <Contact path="/contact" />
      <Threeeee path="/threeeee" />
      <About path="/about" />
    </FramerRouter>
  </>
);
