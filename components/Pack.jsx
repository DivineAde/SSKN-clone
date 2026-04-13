import React, { useRef } from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";

const packItems = [
  { img: "/exfoliator pack.webp", nameKey: "name" },
  { img: "/oil_drops pack.webp",  nameKey: "name_two" },
  { img: "/cleanser pack.webp",   nameKey: "name_three" },
  { img: "/eye_cream pack.webp",  nameKey: "name_four" },
];

const Pack = ({ packData }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px 80px" }}>
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 32,
        }}
      >
        <div>
          <span className="section-label">Bundles &amp; Sets</span>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: 0 }}
          >
            The Ritual Packs
          </h2>
        </div>

        {/* Scroll controls */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            onClick={() => scroll("left")}
            style={{
              width: 42,
              height: 42,
              border: "1px solid #e8e4df",
              background: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0a0a0a";
              const svg = e.currentTarget.querySelector("svg");
              if (svg) svg.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              const svg = e.currentTarget.querySelector("svg");
              if (svg) svg.style.color = "#0a0a0a";
            }}
          >
            <HiOutlineArrowNarrowLeft style={{ width: 18, height: 18 }} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            style={{
              width: 42,
              height: 42,
              border: "1px solid #e8e4df",
              background: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0a0a0a";
              const svg = e.currentTarget.querySelector("svg");
              if (svg) svg.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              const svg = e.currentTarget.querySelector("svg");
              if (svg) svg.style.color = "#0a0a0a";
            }}
          >
            <HiOutlineArrowNarrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: 20,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory",
          paddingBottom: 8,
        }}
      >
        {packItems.map((item, i) => (
          <Link
            key={i}
            href="/collections/bundles"
            style={{ textDecoration: "none", color: "inherit", flexShrink: 0, scrollSnapAlign: "start" }}
          >
            <div
              style={{
                width: 300,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Image */}
              <div
                style={{
                  overflow: "hidden",
                  background: "#f9f6f2",
                  aspectRatio: "2/3",
                }}
              >
                <img
                  src={item.img}
                  alt={packData?.[item.nameKey] || "Ritual Pack"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
              </div>

              {/* Text */}
              <div style={{ paddingTop: 16 }}>
                <span className="section-label" style={{ marginBottom: 4 }}>Ritual Set</span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: "#0a0a0a",
                  }}
                >
                  {packData?.[item.nameKey] || "Ritual Pack"}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Pack;
