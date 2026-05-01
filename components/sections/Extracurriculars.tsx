"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { extracurriculars, personalInfo } from "@/data/portfolio";
import { GitFork, Link2, Mail, FileText } from "lucide-react";

function AnimateIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export function Extracurriculars() {
  return (
    <section id="activities" className="section-padding">
      <div className="container-narrow">
        <AnimateIn>
          <p className="section-label" style={{ marginBottom: "1rem" }}>
            Involvement
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              marginBottom: "3rem",
              lineHeight: 1.15,
            }}
          >
            Beyond the code.
          </h2>
        </AnimateIn>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {extracurriculars.map((item, i) => (
            <AnimateIn key={item.org} delay={i * 0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "2rem",
                  paddingBottom: "2.5rem",
                  borderBottom: i < extracurriculars.length - 1 ? "1px solid var(--paper-mid)" : "none",
                }}
                className="activity-item"
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--paper-warm)",
                    border: "1px solid var(--paper-mid)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {item.org[0]}
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}>
                      {item.role}
                    </h3>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--ink-faint)" }}>
                      {item.dates}
                    </span>
                  </div>
                  <p style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", marginBottom: "0.6rem" }}>
                    {item.org}
                  </p>
                  <p style={{ color: "var(--ink-muted)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>
                    {item.description}
                  </p>
                  <ul style={{ listStyle: "none" }}>
                    {item.highlights.map((h, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: "var(--ink-muted)", marginBottom: "0.3rem" }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>◆</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .activity-item { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export function Contact() {
  const links = [
    { href: personalInfo.github, icon: <GitFork size={20} />, label: "GitHub", sub: "yourusername" },
    { href: personalInfo.linkedin, icon: <Link2 size={20} />, label: "LinkedIn", sub: "yourusername" },
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={20} />, label: "Email", sub: personalInfo.email },
    { href: personalInfo.resume, icon: <FileText size={20} />, label: "Resume", sub: "Download PDF" },
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--ink)", color: "var(--paper)" }}
    >
      <div className="container-narrow">
        <AnimateIn>
          <p
            className="section-label"
            style={{ color: "var(--accent)", marginBottom: "1rem" }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              marginBottom: "1rem",
              lineHeight: 1.1,
              color: "var(--paper)",
            }}
          >
            Let's build something.
          </h2>
          <p
            style={{
              color: "rgba(247, 245, 240, 0.5)",
              fontSize: "1rem",
              marginBottom: "3rem",
              maxWidth: "460px",
              lineHeight: 1.7,
            }}
          >
            I'm open to new opportunities, collaborations, and conversations. Reach out through any of the links below.
          </p>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {links.map((link, i) => (
            <AnimateIn key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.5rem",
                  border: "1px solid rgba(247, 245, 240, 0.15)",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                  color: "var(--paper)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(200, 80, 42, 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(247, 245, 240, 0.15)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span style={{ color: "var(--accent)" }}>{link.icon}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, marginBottom: "0.2rem" }}>
                    {link.label}
                  </p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "rgba(247, 245, 240, 0.45)" }}>
                    {link.sub}
                  </p>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
