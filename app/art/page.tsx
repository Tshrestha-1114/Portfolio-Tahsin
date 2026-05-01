"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { artworks } from "@/data/portfolio";
import { X } from "lucide-react";

const allCategories = ["All", ...Array.from(new Set(artworks.map((a) => a.category)))];

// Placeholder shown when no image or image fails to load
function ArtPlaceholder({ title, index }: { title: string; index: number }) {
  const hues = [200, 160, 280, 30, 340, 60, 220, 10, 180, 300, 240, 130, 350];
  const hue = hues[index % hues.length];
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `hsl(${hue}, 18%, 14%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontSize: "3rem",
        color: `hsl(${hue}, 30%, 35%)`,
        userSelect: "none",
      }}
    >
      {title[0]}
    </div>
  );
}

// Image with fallback — uses plain <img> so external GitHub URLs always work
function ArtImage({
  src,
  alt,
  index,
  style,
}: {
  src: string;
  alt: string;
  index: number;
  style?: React.CSSProperties;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <ArtPlaceholder title={alt} index={index} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        ...style,
      }}
    />
  );
}

export default function ArtPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof artworks)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

  return (
    <div
      style={{
        background: "#0c0b09",
        minHeight: "100vh",
        color: "var(--paper)",
        paddingTop: "100px",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem 3rem",
          borderBottom: "1px solid rgba(247,245,240,0.1)",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--teal)",
            marginBottom: "1rem",
          }}
        >
          Studio / Art
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
          }}
        >
          Making things
          <br />
          <em style={{ color: "rgba(247,245,240,0.4)" }}>with intention.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: "rgba(247,245,240,0.45)",
            maxWidth: "520px",
            lineHeight: 1.7,
            fontSize: "0.95rem",
            marginBottom: "2rem",
          }}
        >
          A selection of work from my Studio Arts minor at Stony Brook University. Photography, drawing, mixed media, and installation — each piece a different way of thinking through form, identity, and meaning.
        </motion.p>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.35rem 1rem",
                borderRadius: "100px",
                border: "1px solid",
                cursor: "pointer",
                transition: "all 0.2s",
                borderColor: activeCategory === cat ? "var(--teal)" : "rgba(247,245,240,0.2)",
                background: activeCategory === cat ? "var(--teal)" : "transparent",
                color: activeCategory === cat ? "var(--paper)" : "rgba(247,245,240,0.5)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Masonry grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3rem 2rem",
          columns: "3",
          columnGap: "1.25rem",
        }}
        className="art-grid"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((artwork, i) => (
            <motion.div
              key={artwork.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              style={{
                breakInside: "avoid",
                marginBottom: "1.25rem",
                cursor: "pointer",
              }}
              onClick={() => setSelected(artwork)}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "2px",
                  // vary aspect ratios across the grid for visual rhythm
                  aspectRatio: i % 5 === 0 ? "1/1" : i % 5 === 1 ? "4/3" : i % 5 === 2 ? "3/4" : i % 5 === 3 ? "16/9" : "2/3",
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector(".art-overlay") as HTMLElement | null;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector(".art-overlay") as HTMLElement | null;
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                <ArtPlaceholder title={artwork.title} index={i} />
                <ArtImage src={artwork.image} alt={artwork.title} index={i} />

                {/* Hover overlay */}
                <div
                  className="art-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(12, 11, 9, 0.78)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.25rem",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    zIndex: 3,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--teal)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {artwork.medium} · {artwork.year}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      color: "var(--paper)",
                    }}
                  >
                    {artwork.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(12, 11, 9, 0.92)",
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              backdropFilter: "blur(8px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#161412",
                border: "1px solid rgba(247,245,240,0.1)",
                borderRadius: "4px",
                maxWidth: "820px",
                width: "100%",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
              className="lightbox-inner"
            >
              {/* Image panel */}
              <div
                style={{
                  position: "relative",
                  minHeight: "320px",
                }}
              >
                <ArtPlaceholder
                  title={selected.title}
                  index={parseInt(selected.id) - 1}
                />
                <ArtImage
                  src={selected.image}
                  alt={selected.title}
                  index={parseInt(selected.id) - 1}
                />
              </div>

              {/* Info panel */}
              <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    alignSelf: "flex-end",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(247,245,240,0.4)",
                    padding: "0",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--paper)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(247,245,240,0.4)")}
                >
                  <X size={18} />
                </button>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--teal)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {selected.medium} · {selected.year}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      lineHeight: 1.15,
                      color: "var(--paper)",
                    }}
                  >
                    {selected.title}
                  </h2>
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(247,245,240,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  {selected.description}
                </p>

                <span
                  style={{
                    alignSelf: "flex-start",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--teal)",
                    background: "rgba(26, 107, 90, 0.15)",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "100px",
                  }}
                >
                  {selected.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) { .art-grid { columns: 2 !important; } }
        @media (max-width: 580px) { .art-grid { columns: 1 !important; } }
        @media (max-width: 640px) { .lightbox-inner { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
