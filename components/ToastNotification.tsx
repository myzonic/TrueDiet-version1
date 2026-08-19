"use client";

import { Toast } from "@ark-ui/react/toast";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
  isOpen: boolean;
}

export function useToast() {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "success", duration = 4000) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), duration);
  };

  return { toast, showToast, setToast };
}

export function ToastNotification({ message, type, duration = 4000, onClose, isOpen }: ToastProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  const bgColor = {
    success: "rgba(96,144,0,0.1)",
    error: "rgba(240,128,0,0.1)",
    info: "rgba(0,80,96,0.1)",
  }[type];

  const borderColor = {
    success: "var(--terracotta)",
    error: "var(--orange)",
    info: "var(--charcoal-deep)",
  }[type];

  const textColor = {
    success: "var(--terracotta)",
    error: "var(--orange)",
    info: "var(--charcoal-deep)",
  }[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 9999,
            maxWidth: "400px",
          }}
        >
          <div
            style={{
              background: bgColor,
              border: `2px solid ${borderColor}`,
              borderRadius: "12px",
              padding: "16px 20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 600,
                color: textColor,
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {type === "success" && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke={textColor} strokeWidth="1.5" />
                  <path d="M7 10l2 2 4-4" stroke={textColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {type === "error" && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke={textColor} strokeWidth="1.5" />
                  <path d="M10 7v4M10 13h.01" stroke={textColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
              {message}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
