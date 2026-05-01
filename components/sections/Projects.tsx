"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, GitFork } from "lucide-react";

const categories = ["All", "AI", "Backend", "Data", "Systems", "Full Stack", "Cloud"];

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

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--paper-warm)" }}>
      <div className="container-wide">
        <AnimateIn>
          <p className="section-label" style={{ marginBottom: "1rem" }}>
            Projects
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "2rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Things I've built.
            </h2>

            {/* Filter pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "100px",
                    border: "1px solid",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    borderColor: activeCategory === cat ? "var(--accent)" : "var(--paper-mid)",
                    background: activeCategory === cat ? "var(--accent)" : "transparent",
                    color: activeCategory === cat ? "var(--paper)" : "var(--ink-muted)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "var(--paper)",
        border: "1px solid var(--paper-mid)",
        borderRadius: "4px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--paper-mid)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Categories */}
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        {project.category.map((cat) => (
          <span
            key={cat}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "var(--accent-glow)",
              padding: "0.2rem 0.5rem",
              borderRadius: "2px",
            }}
          >
            {cat}
          </span>
        ))}
        {project.featured && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--teal)",
              background: "var(--teal-light)",
              padding: "0.2rem 0.5rem",
              borderRadius: "2px",
            }}
          >
            Featured
          </span>
        )}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.3rem",
          marginBottom: "0.4rem",
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          color: "var(--ink-muted)",
          fontSize: "0.875rem",
          marginBottom: "1rem",
          lineHeight: 1.6,
        }}
      >
        {project.tagline}
      </p>

      {/* Problem/Solution */}
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ fontSize: "0.8rem", color: "var(--ink-faint)", marginBottom: "0.3rem" }}>
          <strong style={{ color: "var(--ink-muted)" }}>Problem</strong>
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", lineHeight: 1.6 }}>
          {project.problem}
        </p>
      </div>

      {/* Expandable details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "0.8rem", color: "var(--ink-faint)", marginBottom: "0.3rem" }}>
                <strong style={{ color: "var(--ink-muted)" }}>Solution</strong>
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", lineHeight: 1.6 }}>
                {project.solution}
              </p>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "0.8rem", color: "var(--ink-faint)", marginBottom: "0.5rem" }}>
                <strong style={{ color: "var(--ink-muted)" }}>Impact</strong>
              </p>
              {project.impact.map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--ink-muted)",
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>◆</span>
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--ink-faint)",
          textAlign: "left",
          padding: "0",
          marginBottom: "1.25rem",
          letterSpacing: "0.05em",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ink-faint)")}
      >
        {expanded ? "↑ less" : "↓ more"}
      </button>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--ink-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink-muted)")}
            onClick={(e) => e.stopPropagation()}
          >
            <GitFork size={13} />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--teal)",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
