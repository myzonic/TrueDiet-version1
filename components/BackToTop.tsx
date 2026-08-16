"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.4,
      y: (e.clientY - rect.top - rect.height / 2) * 0.4,
    });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          ref={ref}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: pos.x, ...({ y: pos.y } as object) }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          onMouseMove={handleMove}
          onMouseLeave={() => setPos({ x: 0, y: 0 })}
          onClick={scrollTop}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          style={{
            position: "fixed", bottom: "36px", right: "36px",
            zIndex: 80, width: "52px", height: "52px",
            borderRadius: "50%", border: "none", cursor: "none",
            background: "var(--charcoal-deep)",
            boxShadow: "0 8px 32px rgba(0,80,96,0.28)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          whileTap={{ scale: 0.92 } as any}
          aria-label="Back to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 14V4M4 8.5L9 4l5 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
