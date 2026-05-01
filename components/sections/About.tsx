"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, personalInfo } from "@/data/portfolio";

function AnimateIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <AnimateIn>
          <p className="section-label" style={{ marginBottom: "1rem" }}>
            About
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              marginBottom: "2.5rem",
              lineHeight: 1.15,
            }}
          >
            Engineer by training,
            <br />
            <em style={{ color: "var(--accent)" }}>artist by instinct.</em>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              marginBottom: "4rem",
            }}
            className="about-grid"
          >
            <div>
              {personalInfo.longBio.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--ink-muted)",
                    lineHeight: 1.8,
                    marginBottom: "1.25rem",
                    fontSize: "0.975rem",
                  }}
                >
                  {para.trim()}
                </p>
              ))}
            </div>

            <div>
              <div
                style={{
                  background: "var(--paper-warm)",
                  border: "1px solid var(--paper-mid)",
                  borderRadius: "4px",
                  padding: "1.75rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-faint)",
                    marginBottom: "1rem",
                  }}
                >
                  Engineering Focus
                </p>
                {[
                  "AI Systems & LLM Applications",
                  "Backend & Data Engineering",
                  "Machine Learning at Scale",
                  "Agentic AI Workflows",
                  "Forward Deployed Engineering",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.6rem 0",
                      borderBottom: "1px solid var(--paper-mid)",
                      fontSize: "0.875rem",
                      color: "var(--ink-muted)",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        background: "var(--accent)",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </div>
                ))}

                <div style={{ marginTop: "1.25rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink-faint)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Languages Spoken
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {["Bengali (Native)", "English (Fluent)", "Hindi", "Urdu"].map((lang) => (
                      <span key={lang} className="tag">{lang}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Education */}
        <AnimateIn delay={0.2}>
          <hr className="divider" />
          <div style={{ marginTop: "2.5rem" }}>
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>
              Education
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {education.map((edu, i) => (
                <div
                  key={edu.school + edu.degree}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                    paddingBottom: i < education.length - 1 ? "2rem" : 0,
                    borderBottom: i < education.length - 1 ? "1px solid var(--paper-mid)" : "none",
                  }}
                  className="edu-grid"
                >
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "0.25rem" }}>
                      {edu.school}
                    </h3>
                    <p style={{ color: "var(--ink-muted)", fontSize: "0.875rem", marginBottom: "0.2rem" }}>
                      {edu.degree}
                    </p>
                    {edu.minor && (
                      <p style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.7rem", marginBottom: "0.5rem" }}>
                        {edu.minor}
                      </p>
                    )}
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--ink-faint)", marginBottom: "0.6rem" }}>
                      {edu.years}
                    </p>
                    {edu.honors.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                        {edu.honors.map((h) => (
                          <span key={h} style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.03em", color: "var(--teal)", background: "var(--teal-light)", padding: "0.2rem 0.5rem", borderRadius: "2px" }}>
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "0.75rem" }}>
                      Coursework
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {edu.coursework.map((course) => (
                        <span key={course} className="tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid, .edu-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
