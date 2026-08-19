"use client";

import { Accordion } from "@ark-ui/react/accordion";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  items: FAQItem[];
}

export default function AccordionFAQ({ items }: AccordionFAQProps) {
  return (
    <Accordion.Root collapsible defaultValue={["0"]}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <Accordion.Item value={i.toString()}>
            <Accordion.ItemTrigger
              style={{
                width: "100%",
                padding: "20px 24px",
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: i === 0 ? "12px 12px 0 0" : i === items.length - 1 ? "0 0 12px 12px" : "0",
                marginTop: i === 0 ? "0" : "-1px",
                cursor: "pointer",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "16px",
                color: "var(--charcoal-deep)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--off-white)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--white)";
              }}
            >
              <span>{item.question}</span>
              <motion.span
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginLeft: "16px",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 7.5l5 5 5-5"
                    stroke="var(--orange)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent
              style={{
                padding: "24px",
                background: "var(--off-white)",
                borderBottom: "1px solid var(--border)",
                borderRadius:
                  i === items.length - 1 ? "0 0 12px 12px" : "0",
                borderLeft: "1px solid var(--border)",
                borderRight: "1px solid var(--border)",
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "var(--charcoal)",
              }}
            >
              {item.answer}
            </Accordion.ItemContent>
          </Accordion.Item>
        </motion.div>
      ))}
    </Accordion.Root>
  );
}
