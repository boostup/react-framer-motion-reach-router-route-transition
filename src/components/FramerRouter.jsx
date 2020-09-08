import React from "react";
import { Router, Location } from "@reach/router";

import { AnimatePresence } from "framer-motion";

export default ({ children }) => (
  <Location>
    {({ location }) => (
      <div style={{ position: "relative" }}>
        <AnimatePresence exitBeforeEnter>
          <Router key={location.key} location={location}>
            {children}
          </Router>
        </AnimatePresence>
      </div>
    )}
  </Location>
);
