import React from "react";
import { motion } from "framer-motion";

const LINE_WIDTH = 40;
const LINE_HEIGHT = 3;

export default function MenuButton({ isDrawerOpen }) {
  return (
    <motion.button
      className="relative cursor-pointer flex flex-col items-center justify-center gap-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <motion.div
        className="bg-[#9eff00] rounded-lg"
        style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
        animate={{
          rotate: isDrawerOpen ? 45 : 0,
          y: isDrawerOpen ? LINE_HEIGHT * 2 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      <motion.div
        className="bg-[#9eff00] rounded-lg"
        style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
        animate={{
          rotate: isDrawerOpen ? -45 : 0,
          y: isDrawerOpen ? -LINE_HEIGHT * 2 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.button>
  );
}
