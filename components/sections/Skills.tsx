"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";

function AnimateIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const categoryColors: Record<string, string> = {
  Languages: "var(--accent)",
  Frontend: "var(--teal)",
  Backend: "#7a5c2e",
  "AI / ML": "#4a3a7a",
  Data: "#2e6b5a",
  "Cloud / Infra": "#3a5a7a",
  Tools: "var(--ink-faint)",
  "Operating Systems": "#5a3a2e",
};

export function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: "var(--paper-warm)" }}>
      <div className="container-wide">
        <AnimateIn>
          <p className="section-label" style={{ marginBottom: "1rem" }}>
            Skills
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              marginBottom: "3rem",
              lineHeight: 1.15,
            }}
          >
            Tools of the trade.
          </h2>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {Object.entries(skills).map(([category, items], i) => (
            <AnimateIn key={category} delay={i * 0.06}>
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--paper-mid)",
                  borderRadius: "4px",
                  padding: "1.5rem",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      width: "3px",
                      height: "18px",
                      background: categoryColors[category] ?? "var(--accent)",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                    }}
                  >
                    {category}
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
