import React from "react";
import { motion } from "framer-motion";

const container = {
  beginning: {},
  final: { transition: { staggerChildren: 0.125 } },
  exit: { opacity: 0 }
};
const item = {
  beginning: { opacity: 0, y: -20 },
  final: { opacity: 1, y: 0 }
};

export default (props) => {
  const { isContainer } = props;

  const containerProps = {
    variants: container,
    initial: "beginning",
    animate: "final",
    exit: "exit"
  };

  const itemProps = { variants: item };

  return (
    <motion.div {...(isContainer ? { ...containerProps } : { ...itemProps })}>
      {props.children}
    </motion.div>
  );
};
