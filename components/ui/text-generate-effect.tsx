"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

export function TextGenerateEffect({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const wordsArr = words.split(" ");

  useEffect(() => {
    if (inView) {
      animate(
        "span",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration, delay: stagger(0.08) }
      );
    }
  }, [inView]);

  return (
    <div ref={ref} className={className}>
      <motion.div ref={scope}>
        {wordsArr.map((word, i) => (
          <motion.span
            key={i}
            style={{
              opacity: 0,
              filter: filter ? "blur(8px)" : "none",
              display: "inline-block",
              marginRight: "0.3em",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
