import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Threeeee from "./pages/threeeee";
import About from "./pages/about";
import Four04 from "./pages/404";

export default () => {
  const location = useLocation();

  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.key} location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/threeeee" component={Threeeee} />
          <Route path="/about" component={About} />
          <Route component={Four04} />
        </Switch>
      </AnimatePresence>
    </>
  );
};
