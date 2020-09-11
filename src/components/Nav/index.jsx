import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { motion, AnimateSharedLayout } from "framer-motion";
import navLinks from "./navData";

import "./Nav.css";

export default () => {
  const selected = isActive(useLocation().pathname, navLinks);

  return (
    <AnimateSharedLayout>
      <nav className="Nav">
        <ol>
          {navLinks.map(({ label, path, color }, i) => {
            return (
              <motion.li
                animate={{
                  color: i === selected ? color : "#333",
                }}
                layout
                key={i}
                className={`label ${i === selected && "selected"}`}
              >
                {i === selected && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    initial={false}
                    animate={{
                      backgroundColor: color,
                      transition: { duration: 0.6 },
                    }}
                  />
                )}
                <NavLink
                  to={path}
                  isActive={(args) => i === selected}
                  style={{ color: i === selected ? color : "#333" }}
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

/**
 * This function is used to determine which navLink will appear as active/selected in the menu.
 * This is determined according to the current location.pathname.
 * Note about the algorithm : array must be sliced in order to remove the index 0 which is equal to path "/".
 * Otherwise path.includes will always match index 0 and the active navlink will always be the "home"/first navLink
 *
 * @param {string} path
 * @param {Array} items
 */
const isActive = (path, items) => {
  if (path === "/") return 0;

  const slicedItems = items.slice(1, items.length);
  const activeNavLinkIndex = slicedItems.findIndex((item) => {
    return path.includes(item.path);
  });
  return activeNavLinkIndex === -1
    ? -1 // this means no active navLink (ie a 404, or not found in the `navLinks` Array
    : activeNavLinkIndex + 1; // + 1 because the Array was sliced by one index some lines ago
};
