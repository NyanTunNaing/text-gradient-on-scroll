// React Hooks
import { useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Components

// Styles

export default function TextGradient({ value }) {
  const text = useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start .9", "start center"],
  });

  return (
    <motion.p
      ref={text}
      style={{ opacity: scrollYProgress }}
      className="paragraph"
    >
      {value}
    </motion.p>
  );
}
