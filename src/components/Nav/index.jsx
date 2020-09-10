import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { motion, AnimateSharedLayout } from "framer-motion";
import { pages } from "./navData";

import "./Nav.css";

export default () => {
  const [selected, setSelected] = useState(0);

  const isActive = (args, i) => {
    if (args && args.path.includes(args.url)) setSelected(i);
  };

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
                <NavLink
                  to={path}
                  isActive={(args) => isActive(args, i)}
                  {...sharedProps}
                >
                  {label}
                </NavLink>
              </motion.li>
            );
          })}
        </ol>
      </nav>
    </AnimateSharedLayout>
  );
};
