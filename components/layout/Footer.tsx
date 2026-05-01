import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--paper-mid)",
        padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--ink-faint)",
          letterSpacing: "0.05em",
        }}
      >
        Built by {personalInfo.name} — designed with purpose, coded with care.
      </p>
    </footer>
  );
}
