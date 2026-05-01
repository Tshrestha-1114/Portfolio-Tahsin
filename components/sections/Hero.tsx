"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { GitFork, Link2, Mail, FileText, ArrowDown } from "lucide-react";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

// Initials shown when photo hasn't loaded or fails
function ProfileInitials() {
  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontSize: "4.5rem",
        color: "var(--paper-mid)",
        background: "var(--paper-warm)",
        zIndex: 0,
      }}
    >
      {initials}
    </div>
  );
}

export function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2rem 5rem",
        maxWidth: "1280px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Grid: text left, photo right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: text */}
        <div>
          <motion.p
            {...fadeUp(0.1)}
            className="section-label"
            style={{ marginBottom: "1.5rem" }}
          >
            Software Engineer / AI Engineer / Builder
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
              color: "var(--ink)",
            }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--ink-muted)",
              maxWidth: "520px",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.4)}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--ink)",
                color: "var(--paper)",
                padding: "0.7rem 1.5rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--ink)")}
            >
              <FileText size={14} />
              Resume
            </a>

            {[
              { href: personalInfo.github, icon: <GitFork size={14} />, label: "GitHub" },
              { href: personalInfo.linkedin, icon: <Link2 size={14} />, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={14} />, label: "Email" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--ink-muted)",
                  padding: "0.7rem 1.25rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  border: "1px solid var(--paper-mid)",
                  borderRadius: "2px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--ink-muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--paper-mid)";
                }}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: profile photo — clean, no overlapping marks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-image-wrap"
        >
          {/* Decorative offset shadow box — behind the photo */}
          <div style={{ position: "relative", width: "260px", height: "320px" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid var(--paper-mid)",
                borderRadius: "4px",
                transform: "translate(10px, 10px)",
                zIndex: 0,
              }}
            />
            {/* Photo frame */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "4px",
                overflow: "hidden",
                background: "var(--paper-warm)",
                zIndex: 1,
              }}
            >
              <ProfileInitials />
              {!imgFailed && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  onError={() => setImgFailed(true)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    zIndex: 2,
                  }}
                />
              )}
            </div>
            {/* Small accent dot — bottom left corner only, not overlapping face */}
            <div
              style={{
                position: "absolute",
                bottom: "-6px",
                left: "-6px",
                width: "20px",
                height: "20px",
                background: "var(--accent)",
                borderRadius: "50%",
                zIndex: 2,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--ink-faint)",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
          scroll
        </span>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}
