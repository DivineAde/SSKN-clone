import React, { useState } from "react";
import { urlFor } from "@/lib/client";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import Link from "next/link";

const TopRated = ({ product: { image, name, slug, price } }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/product/${slug.current}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className="product-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ cursor: "pointer" }}
      >
        {/* ── Image wrapper ── */}
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4", background: "#f9f6f2" }}>
          <img
            src={urlFor(image && image[hovered ? 1 : 0])}
            alt={name}
            className="product-image"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Hover CTA */}
          <div
            className="card-overlay-btn"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "16px",
            }}
          >
            <button
              type="button"
              style={{
                width: "100%",
                height: 44,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.8)",
                color: "#0a0a0a",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0a0a0a") || (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.95)") || (e.currentTarget.style.color = "#0a0a0a")}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* ── Info ── */}
        <div style={{ padding: "14px 16px 16px" }}>
          {/* Stars */}
          <div style={{ display: "flex", gap: 2, marginBottom: 8 }}>
            {[...Array(4)].map((_, i) => (
              <AiFillStar key={i} style={{ width: 12, height: 12, color: "#0a0a0a" }} />
            ))}
            <BsStarHalf style={{ width: 12, height: 12, color: "#0a0a0a" }} />
            <span style={{ fontSize: "0.65rem", color: "#888", marginLeft: 4, letterSpacing: "0.04em" }}>
              (4.5)
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <h3
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                lineHeight: 1.4,
                flex: 1,
                marginRight: 8,
              }}
            >
              {name}
            </h3>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#0a0a0a",
                letterSpacing: "-0.01em",
                flexShrink: 0,
              }}
            >
              ${price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopRated;
