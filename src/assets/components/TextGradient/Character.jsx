// React Hooks
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

// Components

// Styles

export default function TextGradient({ value }) {
  const text = useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start .9", "start .3"],
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
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="word">
      {characters.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character range={[start, end]} progress={progress} key={i}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="character">
      <span className="shadow">{children}</span>
      <motion.span style={{opacity}}>{children}</motion.span>
    </span>
  );
};
