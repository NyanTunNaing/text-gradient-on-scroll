// React Hooks
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Components

// Styles

export default function TextGradient({ value }) {
  const text = useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start .9", "start .4"],
  });
  const words = value.split(" ");

  return (
    <p ref={text} className="paragraph">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        console.log([start, end]);

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="word">
        <span className="shadow">{children}</span>
        <motion.span style={{ opacity }} >{children}</motion.span>
    </span>
  );
};
