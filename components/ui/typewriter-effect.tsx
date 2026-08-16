"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimate, stagger } from "framer-motion";

export function TypewriterEffect({
  words,
  className = "",
  cursorClassName = "",
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(
        "span",
        { display: "inline-block", opacity: 1 },
        { duration: 0.3, delay: stagger(0.08), ease: "easeInOut" }
      );
    }
  }, [inView]);

  const renderWords = () => (
    <motion.div ref={scope} style={{ display: "inline" }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", marginRight: "0.35em" }}>
          {word.text.split("").map((char, ci) => (
            <motion.span
              key={ci}
              style={{
                opacity: 0,
                display: "none",
                fontFamily: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                color: "inherit",
              }}
              className={word.className}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );

  return (
    <div ref={ref} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }} className={className}>
      {renderWords()}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.1 }}
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "var(--terracotta)",
          borderRadius: "2px",
          verticalAlign: "middle",
          flexShrink: 0,
        }}
        className={cursorClassName}
      />
    </div>
  );
}
