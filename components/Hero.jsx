import React, { useState, useEffect } from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

export const Hero = ({ heroData }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [smallActiveIndex, setSmallActiveIndex] = useState(4);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fade in on mount
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSmallActiveIndex((prev) => (prev === 4 ? 2 : 4));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 1 ? 3 : 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Desktop image
      <img
        src={urlFor(heroData.image && heroData.image[activeIndex]).url()}
        alt="Hero"
        style={{
          display: "block",
          width: "100%",
          objectFit: "cover",
          marginTop: "var(--nav-h, 80px)",
          transition: "opacity 0.6s ease",
        }}
        className="hidden md:block!"
      /> */}

      {/* Mobile image */}
      <img
        src={urlFor(heroData.image && heroData.image[smallActiveIndex]).url()}
        alt="Hero"
        style={{
          display: "block",
          width: "100%",
          objectFit: "cover",
          marginTop: "var(--nav-h, 80px)",
        }}
        className="block md:hidden!"
      />

      {/* Full-image gradient overlay */}
      <div
        className="hero-gradient"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          maxWidth: 520,
          animation: "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            marginBottom: 12,
          }}
        >
          New Collection
        </span>

        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 10,
          }}
        >
          {heroData.name}
        </h1>

        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.6,
            marginBottom: 24,
            maxWidth: 360,
          }}
        >
          {heroData.details}
        </p>

        <Link href="/collections/shop-all">
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#ffffff",
              color: "#0a0a0a",
              border: "none",
              padding: "14px 32px",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "background 0.25s ease, color 0.25s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0a0a0a";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#0a0a0a";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {heroData.choice || "Shop Now"}
            <span style={{ fontSize: "1em", lineHeight: 1 }}>→</span>
          </button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          right: 28,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.6,
        }}
        className="hidden md:flex"
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: "rgba(255,255,255,0.6)",
            animation: "scrollLine 1.5s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontSize: "0.55rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </div>
  );
};
