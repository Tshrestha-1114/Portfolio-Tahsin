"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolio";

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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <AnimateIn>
          <p className="section-label" style={{ marginBottom: "1rem" }}>
            Experience
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              marginBottom: "3.5rem",
              lineHeight: 1.15,
            }}
          >
            Where I've built things.
          </h2>
        </AnimateIn>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "1px",
              background: "var(--paper-mid)",
            }}
            className="timeline-line"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {experience.map((job, i) => (
              <AnimateIn key={`${job.company}-${i}`} delay={i * 0.1}>
                <div
                  style={{ paddingLeft: "2.5rem", position: "relative" }}
                  className="timeline-item"
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-4px",
                      top: "6px",
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: i === 0 ? "var(--accent)" : "var(--paper-mid)",
                      border: "1.5px solid var(--accent)",
                    }}
                    className="timeline-dot"
                  />

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "1rem",
                      marginBottom: "1rem",
                      alignItems: "start",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.25rem",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {job.role}
                      </h3>
                      <p
                        style={{
                          color: "var(--accent)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                        }}
                      >
                        {job.company} {job.team ? `— ${job.team}` : ""}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--ink-faint)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {job.dates}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--ink-faint)",
                        }}
                      >
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", marginBottom: "1rem" }}>
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          marginBottom: "0.6rem",
                          fontSize: "0.9rem",
                          color: "var(--ink-muted)",
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            flexShrink: 0,
                            marginTop: "0.35rem",
                            fontSize: "0.5rem",
                          }}
                        >
                          ◆
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {job.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line, .timeline-dot { display: none !important; }
          .timeline-item { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
