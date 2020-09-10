import React, { useState } from "react";
import { Link } from "@reach/router";

import { motion, AnimateSharedLayout } from "framer-motion";
import { pages } from "./navData";

import "./Nav.css";

export default () => {
  const [selected, setSelected] = useState(0);

  return (
    <AnimateSharedLayout>
      <nav className="Nav">
        <ol>
          {pages.map(({ label, path, color }, i) => {
            const sharedProps = {
              className: `label ${i === selected && "selected"}`,
              style: { color: i === selected ? color : "#333" },
            };
            return (
              <motion.li
                animate={{ color: i === selected ? color : "#333" }}
                layout
                key={i}
                className={`label ${i === selected && "selected"}`}
                onClick={() => setSelected(i)}
              >
                {i === selected && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: color }}
                  />
                )}
                <Link to={path} {...sharedProps}>
                  {label}
                </Link>
              </motion.li>
            );
          })}
        </ol>
      </nav>
    </AnimateSharedLayout>
  );
};
