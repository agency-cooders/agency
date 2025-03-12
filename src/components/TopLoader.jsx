"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TopLoader = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] bg-primary z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{
        ease: "easeOut",
        duration: 0.2,
      }}>
      <motion.div
        className="h-full bg-primary"
        style={{
          width: "100%",
          height: "100%",
        }}
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 left-0 h-full bg-primary opacity-60"
        style={{
          width: "100%",
          filter: "blur(4px)",
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default TopLoader;
