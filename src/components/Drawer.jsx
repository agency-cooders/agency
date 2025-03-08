import React from "react";
import { motion } from "framer-motion";

const HEADER_HEIGHT = "80px";

const Drawer = ({ isDrawerOpen }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isDrawerOpen ? "0%" : "100%" }}
      exit={{ x: "100%" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 0.8,
      }}
      className={`fixed left-0 w-full bg-overlay shadow-2xl`}
      style={{
        top: HEADER_HEIGHT,
        height: `calc(100vh - ${HEADER_HEIGHT})`,
      }}>
      {" "}
    </motion.div>
  );
};

export default Drawer;
