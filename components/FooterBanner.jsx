import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterBanner = () => {
  return (
    <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {/* Card 1 — Neutral Accents */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#f9f6f2",
            cursor: "pointer",
            group: true,
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
          <div style={{ overflow: "hidden", aspectRatio: "4/5" }}>
            <Image
              src="/Natural accent.webp"
              width={1000}
              height={800}
              alt="Neutral Accents"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </div>
          <div style={{ padding: "24px 0 8px" }}>
            <span className="section-label">Home Collection</span>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.4rem",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                marginBottom: 8,
              }}
            >
              Neutral Accents
            </h3>
            <p style={{ fontSize: "0.8rem", color: "#777", lineHeight: 1.65, marginBottom: 20 }}>
              Transform your home into a sanctuary with sculptural decor.
            </p>
            <Link href="/collections/home-accessories">
              <button className="btn-primary" style={{ fontSize: "0.65rem" }}>
                Home Accessories
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 — Reduce Reuse Refill */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#f9f6f2",
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
          <div style={{ overflow: "hidden", aspectRatio: "4/5" }}>
            <Image
              src="/RRR.webp"
              width={1000}
              height={800}
              alt="Reduce, Reuse, Refill"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </div>
          <div style={{ padding: "24px 0 8px" }}>
            <span className="section-label">Sustainability</span>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.4rem",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                marginBottom: 8,
              }}
            >
              Reduce, Reuse, Refill
            </h3>
            <p style={{ fontSize: "0.8rem", color: "#777", lineHeight: 1.65, marginBottom: 20 }}>
              Eco-friendly refills extend the life cycle of our products.
            </p>
            <Link href="/collections/refills">
              <button className="btn-primary" style={{ fontSize: "0.65rem" }}>
                Shop Refills
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
